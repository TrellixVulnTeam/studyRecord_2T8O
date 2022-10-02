import math
import numpy as np
import time

def get_vector(a, b):
    return (b[0] - a[0], b[1] - a[1])

def get_norm(a):
    return math.sqrt(a[0] * a[0] + a[1] * a[1])

def cross_prod(a, b):
    return a[0] * b[1] - a[1] * b[0]

def get_start_point(points):
    min_y = 2**31
    for i in points:
        if i[1] <= min_y:
            min_y = i[1]
    min_x = 2**31
    min_point = None
    for i in points:
        if i[1] == min_y and i[0] < min_x:
            min_x = i[0]
            min_point = i
    return min_point

def gift_wrapping(points):
    ch = []
    a = get_start_point(points)
    while True:
        ch.append(a)
        b = points[0]
        for i in range(1, len(points)):
            c = points[i]
            if b == a:
                b = c
            else:
                v1 = get_vector(a, b)
                v2 = get_vector(a, c)
                prod = cross_prod(v1, v2)
                if prod > 0 or (prod == 0 and get_norm(v2) > get_norm(v1)):
                    b = c
        a = b
        if a == ch[0]:
            break
    return ch

def all():
    start=time.time()
    x=np.random.rand(20)
    y=np.random.rand(20)
    ave=(sum(x)/len(x),sum(y)/len(x))
    points=[]
    for i in range(len(x)):
        x[i]-=ave[0]
        y[i]-=ave[1]
        points.append([x[i],y[i]])
    ch = gift_wrapping(points)
    return ch,time.time()-start

if __name__ == "__main__":
    l=[]
    for i in range(10000):
        l.append(all()[1])
    print(sum(l))