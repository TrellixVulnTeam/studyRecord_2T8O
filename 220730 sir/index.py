import csv
import pprint

with open('nhk_news_covid19_prefectures_daily_data.csv') as f:
    data=f.read()

l=[]

for i in data.split("\n"):
    l.append(i.split(","))

dict={}

for index,i in enumerate(l):
    if not i[0] in dict:
        dict[i[0]]=0
    if index!=0:
        print(i[3])
        dict[i[0]]+=int(i[3])

pprint(dict)