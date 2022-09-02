from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.config import settings

engine = create_engine(
    settings.get_settings().database_url,
    connect_args={"check_same_thread": False},
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