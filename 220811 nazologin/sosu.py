from math import sqrt as sq
sosu=True
sosus=[]
for i in range(97-1):
    i+=2
    for p in range(int(sq(i))):
        p+=2
        if i%p==0:
            sosu=False
            break
    if sosu and i>10:
        sosus.append(i)
    else:
        sosu=True

print(sosus)