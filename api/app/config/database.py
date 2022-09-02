from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config import settings

engine = create_engine(
    settings.get_settings().database_url,
    echo=True,
    future=True,
)
session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
ORMBase = declarative_base()

def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()