from functools import lru_cache
import logging
from pydantic import BaseSettings
from pydantic import AnyUrl
log = logging.getLogger("uvicorn")

class Settings(BaseSettings):
    database_url: AnyUrl

    class Config:
        env_file = ".env"
    

@lru_cache()
def get_settings():
    log.info("Loading settings")
    return Settings()