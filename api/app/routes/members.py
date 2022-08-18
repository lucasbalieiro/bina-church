from fastapi import APIRouter

router = APIRouter(
    prefix="/members",
    tags=["members"],
)

@router.get("/")
async def members():
    return [
        {
            "id": 1,
            "name": "John Doe",
            "address": "123 Main St",
            "birthdate": "01/01/1970",
            "situation": "Aceitando",
            "phone": "1234567890",
            "leader": "John Doe Leader"
        },
        {
            "id": 2,
            "name": "John Doe2",
            "address": "1234 Main St",
            "birthdate": "02/01/1970",
            "situation": "Reconciliando",
            "phone": "1234567890",
            "leader": "John Doe Leader"
        }
    ]
