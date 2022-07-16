from fastapi import FastAPI
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = FastAPI()

if not firebase_admin._apps:
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)

db = firestore.client()

@app.get("/articles")
def read_root():
    l=[]
    users_ref = db.collection(u'users')
    docs = users_ref.stream()
    for doc in docs:
        l.append(doc.to_dict())
    return l