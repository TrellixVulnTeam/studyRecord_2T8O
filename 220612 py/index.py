import cv2
from matplotlib import pyplot as plt
import time
import numpy as np

cap = cv2.VideoCapture(0)

time.sleep(1)

for i in range(10):
    time.sleep(1)
    ret, frame = cap.read()
    img=np.asarray(frame)
    title="./capture/pict{}.jpg".format(str(i))
    print(title)
    cv2.imwrite(title,img)
# img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
# plt.imshow(img)
# plt.show()
