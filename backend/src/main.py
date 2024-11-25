from fastapi import FastAPI, HTTPException, status, Form
import requests
import logging
from motor.motor_asyncio import AsyncIOMotorClient
from contextlib import asynccontextmanager
from datetime import datetime
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware

from .schemas import Data, FetchMovieResponse, Movie
from .models import QueryCollection
from .config import settings

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize DB connection on startup
    DATABASE_NAME = settings.mongodb_database
    MONGODB_URL = settings.mongodb_url

    if not DATABASE_NAME or not MONGODB_URL:
        logger.error("MongoDB URI and database name must be set")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="MongoDB URI and database name must be set")
    
    logger.info(f"Connection string: {MONGODB_URL}")
    logger.info(f"Database name: {DATABASE_NAME}")

    app.mongodb_client = AsyncIOMotorClient(MONGODB_URL)
    app.database = app.mongodb_client[DATABASE_NAME]
    
    yield
    
    # Close DB connection on shutdown
    app.mongodb_client.close()

app = FastAPI(lifespan=lifespan)

# Updated CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Browser access
        "http://frontend:3000",   # Docker internal network access
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/", response_model=Movie, status_code=status.HTTP_200_OK)
async def get_movie(data: Annotated[Data, Form()]):
    logger.info(f"Received data: {data}")

    # Get API URL and access token
    api_url = settings.api_url
    access_token = settings.access_token

    if not api_url or not access_token:
        logger.error("API URL or access token is not set")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="API URL or access token is not set")
    
    logger.info(f"API URL: {api_url} | Access token: {access_token}")

    queries_collection = app.database.get_collection("queries")

    logger.info(f"Queries collection: {queries_collection}")
    logger.info("Saving log into database")

    # Insert log into database
    await queries_collection.insert_one(
        {
            **data.model_dump(),
            "timestamp": datetime.now()
        }
    )

    logger.info("Log saved into database")
    logger.info(f"Fetching movie: {data.movie_name}")

    # Fetch movie from API
    try:    
        response = requests.get(
            f"{api_url}/movie?name={data.movie_name}&limit=1", 
            headers={"Authorization": f"Bearer {access_token}"}
        )
    except Exception as e:
        logger.error(f"Error fetching movie: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

    # Parse response
    response_data = FetchMovieResponse(**response.json())
    
    logger.info(f"Response: {response_data}")

    if response_data.total == 0:
        logger.warning(f"No movie found for {data.movie_name}")
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Nenhum filme encontrado.")
    
    movie = response_data.docs[0]

    return Movie(**movie)

@app.get("/", status_code=status.HTTP_200_OK)
async def get_history():
    logger.info("Fetching history")

    queries_collection = app.database.get_collection("queries")

    queries = await queries_collection.find().to_list(length=None)
    result = QueryCollection(queries=queries)

    logger.info(f"Result: {result}")

    return result.queries