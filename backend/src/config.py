from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    api_url: str
    access_token: str
    mongodb_url: str
    mongodb_database: str

    class Config:
        env_file = ".env.local"

settings = Settings()