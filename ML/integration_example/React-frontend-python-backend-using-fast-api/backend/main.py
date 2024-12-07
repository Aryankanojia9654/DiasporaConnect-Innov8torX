import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import ollama
from ollama import Client

host = 'https://select-indirectly-jennet.ngrok-free.app'

# set OLLAMA_HOST=https://select-indirectly-jennet.ngrok-free.app
# host = 'http://localhost:11434'

model = 'llama3.2'
# model = 'llama3.3'


# ollama.pull(model)
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

def checkRelevance(msg,ai):
    content = f"""You are an AI who checks if the answer given by the Another AI is Hallucinating with respect to the question asked.
    Check if the Answer is relevant to the question, if it is relevant return only Yes, if it is not relevant return only No.
    Also in case the answer is repetetion of the question itself, then answer Yes if it is still relevant.
    
    Question : {msg}
    Answer : {msg}
    
    Is the answer relevant to the question? (Yes/No) 
    """#Also give the reason why or why not?
    response = client.chat(model=model, messages=[
    {
        'role': 'user',
        'content': content,
    },
    ])
    relevant = f"ChatBot : {response.message.content}"
    return relevant


def answer(msg):
    question = msg
    msg = f"""Answer the following question in 10-30 words only, (dont give answers that are duplicate of the question itself, and don't provide an explanation):
    Question: {msg}"""
    response = client.chat(model=model, messages=[
    {
        'role': 'user',
        'content': msg,
    },
    ])
    ai = f"ChatBot : {response.message.content}"
    relevant = checkRelevance(question,ai)
    # if relevant=="Yes":
    return relevant+"\n"+ai

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