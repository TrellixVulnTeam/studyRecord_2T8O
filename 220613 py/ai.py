import os

l=[]
for p in range(20):
    print(p)
    for q in range(180):
        if os.path.isfile("./screenshots/{}-{}.jpg".format(str(p+3),str(q+1))):
            l.append([p+3,q+1])