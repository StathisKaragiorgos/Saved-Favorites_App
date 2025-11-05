from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import bcrypt

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

users={}

class User(BaseModel):
    username:str
    email:str
    password:str



@app.get("/")
def read_root():
    return {"message": "FastAPI backend is running!"}

@app.post("/signup")
def signup(user:User):
    if user.email in users:
        return {"message": "Email alrady registered"}
    
    hashed_pw = bcrypt.hashpw(user.password.encode("utf-8"), bcrypt.gensalt())
    users[user.email] = {"username": user.username, "password": hashed_pw}
    
    return {"message": "Signup successful"}

@app.post("/login")
def login(user: User):
    stored_user = users.get(user.email)
    if not stored_user:
        return {"message": "User not found"}

    if stored_user["username"] != user.username:
        return {"message": "Invalid username"}

    if not bcrypt.checkpw(user.password.encode("utf-8"), stored_user["password"]):
        return {"message": "Invalid password"}

    return {"message": "Login successful"}
