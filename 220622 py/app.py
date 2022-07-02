# import requests
# from bs4 import BeautifulSoup

# def temp(a):
#     places={"盛岡":[2,3310],"東京":[3,4410],"仙台":[2,3410],"横浜":[3,4610]}
#     url = "https://weather.yahoo.co.jp/weather/jp/"+str(places[a][0])+".html?day=1"
#     r = requests.get(url)
#     soup = BeautifulSoup(r.text, "html.parser")
#     morioka = soup.find("li", class_='pt'+str(places[a][1]))
#     temp=morioka.find("p",class_="temp")
#     return temp.text

# print(temp("横浜"))

from matplotlib import pyplot as plt
l=[12,7,15,20,24,20,22,40,52,86,157,246,311,270,181,144,72,72,68,51,35,42,37,45,29]
plt.bar(range(len(l)),l)
plt.show()