from fastapi import FastAPI
from app.routes import router_index
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings

def create_app():
    app = FastAPI(
        title="Bina-Church API",
        version="0.1.0"
    )

    app.include_router(router_index.router)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return app

app = create_app()

@app.get("/")
def root():
    return {"message": "Welcome to Bina-Church API", "settings": settings.get_settings()}
