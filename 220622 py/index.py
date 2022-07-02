hira="ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ"
# print(len(list(hira)))

f="こうた"
fs=[]
for i in list(f):
    fs.append(hira.index(i))
print(fs)

l=[]
for i in fs:
    while i>1:
        l.append(int(i%3))
        i-=i%3
        if i!=0:
            i/=3
        if i==1:
            l.append(int(i))

print(l)