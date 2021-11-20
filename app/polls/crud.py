from sqlalchemy import select
from sqlalchemy.orm import Session

from polls import models
from polls import schemas


def get_question(db: Session, question_id: int):
    question_query = select(models.Question).where(models.Question.id == question_id)
    question = db.execute(question_query).one().Question
    return question


def list_questions(db: Session):
    question_query = select(models.Question)
    questions = db.execute(question_query).scalars().all()
    return questions
