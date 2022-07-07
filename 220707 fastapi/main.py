from fastapi import FastAPI
from pydantic import BaseModel
import time
import re
import requests
from bs4 import BeautifulSoup

app = FastAPI()


class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None


@app.get("/")
def read_root():
    return {"now":time.time()}

def getParcent(a):
    url = 'https://tenki.jp/forecast/2/6/3310/3201/'
    res = requests.get(url)
    soup = BeautifulSoup(res.text, "html.parser")
    elem=soup.find("tr",class_="rain-probability")
    # elems = soup.find_all(href=re.compile("news.yahoo.co.jp/pickup"))
    elems=soup.find_all("td")
    return elems[a].text

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    if item_id<4:
        terms=["00-06","06-12","12-18","18-24"]
        return {"term":terms[item_id],"percent":getParcent(item_id)}
    return None

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}