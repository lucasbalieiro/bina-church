from fastapi import FastAPI
from app.routes import router_index
def create_app():
    app = FastAPI(
        title="Bina-Church API"
    )

    app.include_router(router_index.router)

    @app.get("/")
    def root():
        return {"message": "Hello World"}

    return app

app = create_app()