from fastapi import FastAPI
from app.routes import router_index
from fastapi.middleware.cors import CORSMiddleware

def create_app():
    app = FastAPI(
        title="Bina-Church API"
    )

    app.include_router(router_index.router)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/")
    def root():
        return {"message": "Hello World"}

    return app

app = create_app()