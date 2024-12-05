import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import ollama
from ollama import Client

host = 'https://select-indirectly-jennet.ngrok-free.app'
# host = 'http://localhost:11434'
model = 'llama3.2'
# try:
#   ollama.chat(model)
# except ollama.ResponseError as e:
#   print('Error:', e.error)
#   if e.status_code == 404:
#     ollama.pull(model)

client = Client(
  host=host#,
#   headers={'x-some-header': 'some-value'}
)
def answer(msg):
    response = client.chat(model=model, messages=[
    {
        'role': 'user',
        'content': msg,
    },
    ])
    ai = f"ChatBot : {response.message.content}"
    return ai

# print(response)


class Fruit(BaseModel):
    name: str

class Fruits(BaseModel):
    fruits: List[Fruit]
    
app = FastAPI(debug=True)

origins = [
    "http://localhost:5173",
    # Add more origins here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"fruits": []}

@app.get("/fruits", response_model=Fruits)
def get_fruits():
    return Fruits(fruits=memory_db["fruits"])

@app.post("/fruits")
def add_fruit(fruit: Fruit):
    fruit.name = str(answer(str(fruit.name)))
    memory_db["fruits"].append(fruit)
    return fruit
    

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)