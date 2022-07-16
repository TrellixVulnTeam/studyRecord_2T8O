from fastapi import FastAPI
from pydantic import BaseModel
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

@app.get("/")
def hello():
    l=[]
    if not firebase_admin._apps:
        cred = credentials.Certificate('path/to/serviceAccount.json') 
        default_app =firebase_admin.initialize_app(cred)
    db = firestore.client()
    users_ref = db.collection(u'articles')
    docs = users_ref.stream()
    for i in docs:
        l.append(i.to_dict())
    return l