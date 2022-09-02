from uuid import uuid4
from app.config.database import ORMBase
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID, DATE


class Member(ORMBase):
    __tablename__ = "members"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    birthdate = Column(DATE, nullable=False)
    situation = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    leader_id = Column(
        UUID(as_uuid=True),
        ForeignKey("leaders.id", name="FK_member_id_leader_id", ondelete="RESTRICT"),
        nullable=False,
    )
    leader = relationship("Leader", back_populates="members")

