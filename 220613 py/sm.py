# import cv2
# import numpy
# from glob import glob
import os
# from matplotlib import pyplot as plt

# s=0
# for a in range(36):
#     a*=10
#     for b in range(19):
#         b+=3
#         for c in range(180):
#             c+=1
#             if a==80 and c==19:
#                 print("hello")
#                 print("./3n+1/{}-{}-{}.jpg".format(b,a,c))
#                 print(os.path.isfile("./3n+1/{}-{}-{}.jpg".format(b,a,c)))
#             # if os.path.isfile("./3n/{}-{}-{}.jpg".format(b,a,c)):
#             #     os.rename("./3n/{}-{}-{}.jpg".format(b,a,c),"./picture/{}-{}-{}.jpg".format(a,b,c))

# print("./3n+1/3-80-19.jpg"=="./3n+1/3-80-19.jpg")

for a in range(19):
    a+=3
    for b in range(36):
        b*=10
        for c in range(180):
            c+=1
            if os.path.isfile("./pic/{}-{}-{}.jpg".format(a,b,c)):
                os.rename("./pic/{}-{}-{}.jpg".format(a,b,c),"./distances/distance{}/{}-{}-{}.jpg".format(a,a,b,c))