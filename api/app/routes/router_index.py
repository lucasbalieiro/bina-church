from fastapi import APIRouter
from app.routes.members import router as members_router

router = APIRouter()

router.include_router(members_router)