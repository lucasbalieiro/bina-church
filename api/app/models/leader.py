from uuid import uuid4
from app.config.database import ORMBase
from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
class Leader(ORMBase):
    __tablename__ = "leaders"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String, nullable=False)
    members = relationship("Member", back_populates="leader")