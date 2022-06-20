import cv2
import numpy
from matplotlib import pyplot as plt
import os

i=cv2.imread("./base.jpg")
i = cv2.cvtColor(i, cv2.COLOR_BGR2RGB) 
i=numpy.asarray(i)
base=i[284]
# print(len(i[284]))
# # l=[]
# # path="80"
# s=0
for g in range(19):
    path=str(g*10)
    print(path)
    for p in range(20):
        # print(p)
        for q in range(180):
            if os.path.isfile("./screenshots/{}-{}-{}.jpg".format(path,str(p+3),str(q+1))):
                i=cv2.imread("./screenshots/{}-{}-{}.jpg".format(path,str(p+3),str(q+1)))
                i=numpy.asarray(i)
                if base[0][0]==i[284][0][0] and base[963][0]==i[284][963][0]:
                    print("{}-{}-{}".format(path,str(p+3),str(q+1)))
                    os.rename("./screenshops/{}-{}-{}.jpg".format(path,str(p+3),str(q+1)),"./screenshots/t-{}-{}-{}.jpg".format(path,str(p+3),str(q+1)))
                # os.rename("./flip/{}-{}-{}.jpg".format(path,str(p+3),str(q+1)),"./screenshots/{}-{}-{}-flip.jpg".format(path,str(p+3),str(q+1)))
                # img=cv2.imread("./screenshots/{}-{}-{}.jpg".format(path,str(p+3),str(q+1)))
                # img=cv2.flip(img,1)
                # cv2.imwrite("./flip/{}-{}-{}.jpg".format(path,str(p+3),str(q+1)),img)
            # if os.path.isfile("./screenshots/{}-{}-{}.jpg".format(path,str(p+3),str(q+1))):
            #     img=cv2.imread("./screenshots/{}-{}-{}.jpg".format(path,str(p+3),str(q+1)))
            #     img=cv2.flip(img,1)
            #     cv2.imwrite("./flip/{}-{}-{}.jpg".format(path,str(p+3),str(q+1)),img)
            #     # s+=1
            # if os.path.isfile("./screenshots{}/{}-{}.jpg".format(path,str(p+3),str(q+1))):
            # if os.path.isfile("./screenshots/{}-{}-{}.jpg".format(path,str(p+3),str(q+1))):
            #     t+=1
                # oldpath="./screenshots{}/{}-{}.jpg".format(path,str(p+3),str(q+1))
                # os.rename(oldpath,"./screenshots/{}-{}-{}.jpg".format(path,str(p+3),str(q+1)))
            #     l.append([p+3,q+1])
            # print("./screenshots/{}-{}.jpg".format(str(p+3),str(q+1)))
                # i=cv2.imread("./screenshots{}/{}-{}.jpg".format(path,str(p+3),str(q+1)))
                # i = numpy.asarray(cv2.cvtColor(i, cv2.COLOR_BGR2RGB))
                # t=True
                # for x in range(len(i[284])):
                #     if i[284][x][0]!=base[x][0] or i[284][x][1]!=base[x][1] or i[284][x][2]!=base[x][2]:
                #         t=False
                #         break
                # if t:
                #     os.remove("./screenshots{}/{}-{}.jpg".format(path,str(p+3),str(q+1)))
                # else:
                #     s+=1
                #     t=True
# print(s)