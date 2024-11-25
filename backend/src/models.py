from pydantic import BaseModel, Field, BeforeValidator
from datetime import datetime
from typing import Annotated

PyObjectId = Annotated[str, BeforeValidator(str)]

class QueryModel(BaseModel):
    id: PyObjectId = Field(alias='_id')

    username: str
    movie_name: str
    
    timestamp: datetime

class QueryCollection(BaseModel):
    queries: list[QueryModel]