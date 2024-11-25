from pydantic import BaseModel, Field


class Data(BaseModel):
    username: str
    movie_name: str

class FetchMovieResponse(BaseModel):
    docs: list[dict]
    total: int
    limit: int
    offset: int
    page: int
    pages: int

class Movie(BaseModel):
    id: str = Field(..., alias='_id')
    name: str
    runtimeInMinutes: int
    budgetInMillions: float
    boxOfficeRevenueInMillions: float
    academyAwardNominations: int
    academyAwardWins: int
    rottenTomatoesScore: float
