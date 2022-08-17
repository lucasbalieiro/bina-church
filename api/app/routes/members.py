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
            "Address": "123 Main St",
            "Birthday": "01/01/1970",
            "Situation": "Aceitando",
            "Phone": "1234567890",
            "Leader": "John Doe Leader"
        }
    ]
