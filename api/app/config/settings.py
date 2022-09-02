import logging
from pydantic import BaseSettings
from pydantic import AnyUrl
log = logging.getLogger(__name__)

class Settings(BaseSettings):
    database_url: AnyUrl

    class Config:
        env_file = ".env"
    

def get_settings():
    log.info("Loading settings")
    return Settings()