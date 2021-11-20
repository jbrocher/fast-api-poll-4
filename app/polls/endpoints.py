from typing import List

from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.exc import NoResultFound

from . import crud
from . import schemas
from app import database

router = APIRouter()


# Database session as a dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=List[schemas.ReadQuestion])
async def index(db=Depends(get_db)):
    """List existing polls."""
    return crud.list_questions(db)


@router.get("/{id}/", response_model=schemas.ReadQuestionChoices)
async def question_detail(id: int, db=Depends(get_db)):
    """Return a poll details, including the results."""
    try:
        return crud.get_question(db, id)
    except NoResultFound:
        raise HTTPException(
            status_code=404,
            detail="Token does not exist",
        )
