import numpy as np
import time

def outerProduct(a, b):
    return a[0]*b[1]-a[1]*b[0]

def all():
    start=time.time()
    x=np.random.rand(20)
    y=np.random.rand(20)
    ave=(sum(x)/len(x),sum(y)/len(x))
    xy=[]
    for i in range(len(x)):
        x[i]-=ave[0]
        y[i]-=ave[1]
        xy.append([x[i],y[i]])
    t=[]
    ts=[]
    min=0
    while True:
        max=2*31
        maxIndex=-1
        for i in range(len(xy)):
            if xy[i][0]>0 and xy[i][1]>0 and (xy[i][1]/xy[i][0])>min and max>(xy[i][1]/xy[i][0]):
                max=xy[i][1]/xy[i][0]
                maxIndex=i
        if maxIndex==-1:
            break
        else:
            t.append(maxIndex)
            ts.append(xy[maxIndex][1]/xy[maxIndex][0])
            min=max
    min=-1*(2*31)
    while True:
        max=0
        maxIndex=-1
        for i in range(len(xy)):
            if xy[i][0]<0 and xy[i][1]>0 and (xy[i][1]/xy[i][0])>min and (xy[i][1]/xy[i][0])<max:
                max=xy[i][1]/xy[i][0]
                maxIndex=i
        if maxIndex==-1:
            break
        else:
            t.append(maxIndex)
            ts.append(xy[maxIndex][1]/xy[maxIndex][0])
            min=max
    min=0
    while True:
        max=2*31
        maxIndex=-1
        for i in range(len(xy)):
            if xy[i][0]<0 and xy[i][1]<0 and (xy[i][1]/xy[i][0])>min and max>(xy[i][1]/xy[i][0]):
                max=xy[i][1]/xy[i][0]
                maxIndex=i
        if maxIndex==-1:
            break
        else:
            t.append(maxIndex)
            ts.append(xy[maxIndex][1]/xy[maxIndex][0])
            min=max
    min=-1*(2*31)
    while True:
        max=0
        maxIndex=-1
        for i in range(len(xy)):
            if xy[i][0]>0 and xy[i][1]<0 and (xy[i][1]/xy[i][0])>min and (xy[i][1]/xy[i][0])<max:
                max=xy[i][1]/xy[i][0]
                maxIndex=i
        if maxIndex==-1:
            break
        else:
            t.append(maxIndex)
            ts.append(xy[maxIndex][1]/xy[maxIndex][0])
            min=max
    while True:
        g=[]
        for i in range(len(t)):
            if i==len(t)-1:
                if outerProduct(np.array(xy[t[0]])-xy[t[i]],np.array(xy[t[1]])-xy[t[i]])<=0:
                    g.append(t[0])
            elif i==len(t)-2:
                if outerProduct(np.array(xy[t[i+1]])-xy[t[i]],np.array(xy[t[0]])-xy[t[i]])<=0:
                    g.append(t[i+1])
            elif outerProduct(np.array(xy[t[i+1]])-xy[t[i]],np.array(xy[t[i+2]])-xy[t[i]])<=0:
                    g.append(t[i+1])
        if len(g)==0:
            break
        else:
            for i in g:
                t.remove(i)
    return t,time.time()-start


if __name__ == "__main__":
    l=[]
    for i in range(10000):
        l.append(all()[1])
    print(sum(l))