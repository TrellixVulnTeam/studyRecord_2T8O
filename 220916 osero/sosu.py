sum=0
for i in range(6):
    i+=1
    for a in range(6):
        a+=1
        sum+=(10**i)*a
print(sum/36)