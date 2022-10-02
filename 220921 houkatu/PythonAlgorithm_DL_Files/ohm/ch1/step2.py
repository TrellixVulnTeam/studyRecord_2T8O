arr = [1, 2, 3, 4]
for i in range(0, len(arr)):
    for j in range(0, len(arr)):
        new_val = arr[i] + arr[j]
        arr[i] = new_val
print("arr =", arr)