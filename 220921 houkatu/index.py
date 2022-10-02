import numpy as np
# import matplotlib.pyplot as plt
import math
import time


def tan(n):
    return math.tan(n)
def heron(a, b, c):
    s = (a+b+c)/2
    return int(((s*(s-a)*(s-b)*(s-c))**(1/2))*10000000)
def dis(a, b, c, d):
    return float(((a-b)**2+(c-d)**2)**(1/2))

def good():
    t=time.time()
    x = np.random.rand(20)
    y = np.random.rand(20)
    pi = math.pi
    piQua = pi/100
    aveX = sum(x)/len(x)
    aveY = sum(y)/len(y)
    l = []
    for p in range(4):
        for q in range(50):
            for i in range(len(x)):
                if tan(piQua*(p*50+q)) < (y[i]-aveY)/(x[i]-aveX) and (y[i]-aveY)/(x[i]-aveX) < tan(piQua*(p*50+q+1)):
                    if p < 2 and y[i]-aveY > 0:
                        l.append(i)
                    elif p > 1 and y[i]-aveY < 0:
                        l.append(i)
    while True:
        g = []
        for i in range(len(l)):
            if i == len(l)-2:
                a = dis(x[l[i]], aveX, y[l[i]], aveY)
                b = dis(x[l[i]], x[l[i+1]], y[l[i]], y[l[i+1]])
                c = dis(x[l[0]], x[l[i+1]], y[l[0]], y[l[i+1]])
                d = dis(x[l[0]], aveX, y[l[0]], aveY)
                e = dis(x[l[i]], x[l[0]], y[l[i]], y[l[0]])
                f = dis(x[l[i+1]], aveX, y[l[i+1]], aveY)
                if heron(a, b, f)+heron(c, d, f)-heron(a, d, e) < 0:
                    g.append(l[i+1])
            elif i == len(l)-1:
                a = dis(x[l[i]], aveX, y[l[i]], aveY)
                b = dis(x[l[i]], x[l[0]], y[l[i]], y[l[0]])
                c = dis(x[l[1]], x[l[0]], y[l[1]], y[l[0]])
                d = dis(x[l[1]], aveX, y[l[1]], aveY)
                e = dis(x[l[i]], x[l[1]], y[l[i]], y[l[1]])
                f = dis(x[l[0]], aveX, y[l[0]], aveY)
                if heron(a, b, f)+heron(c, d, f)-heron(a, d, e) < 0:
                    g.append(l[0])
            else:
                a = dis(x[l[i]], aveX, y[l[i]], aveY)
                b = dis(x[l[i]], x[l[i+1]], y[l[i]], y[l[i+1]])
                c = dis(x[l[i+2]], x[l[i+1]], y[l[i+2]], y[l[i+1]])
                d = dis(x[l[i+2]], aveX, y[l[i+2]], aveY)
                e = dis(x[l[i]], x[l[i+2]], y[l[i]], y[l[i+2]])
                f = dis(x[l[i+1]], aveX, y[l[i+1]], aveY)
                # print(heron(a, b, f)+heron(c, d, f)-heron(a, d, e))
                if heron(a, b, f)+heron(c, d, f)-heron(a, d, e) < 0:
                    g.append(l[i+1])
        if len(g) == 0:
            break
        else:
            for i in g:
                l.remove(i)
    return l,time.time()-t
print(good()[1])