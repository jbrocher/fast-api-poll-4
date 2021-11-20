from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import polls.endpoints

origins = ["http://localhost:3000"]

app = FastAPI()

app.include_router(polls.endpoints.router, prefix="/polls")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}
