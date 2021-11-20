import datetime
from typing import List

import pydantic


class BaseChoice(pydantic.BaseModel):
    choice_text: str
    votes: int

    class Config:
        orm_mode = True


class BaseQuestion(pydantic.BaseModel):
    question_text: str
    pub_date: datetime.datetime

    class Config:
        orm_mode = True


class ReadQuestion(BaseQuestion):
    id: int


class ReadQuestionChoices(ReadQuestion):
    choices: List[BaseChoice]
