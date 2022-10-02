import insertion
import bubble
import merge
import quick
import random
import time
import copy

if __name__ == "__main__":
    # 10,000個の要素をもつ配列をランダムに生成
    arr = []
    N = 10000
    for i in range(0, N):
        arr.append(random.uniform(0, 10000000))
    
    # 挿入ソート
    start = time.time()
    insertion.insertion_sort(copy.copy(arr), N)
    end = time.time()
    print("挿入ソートの処理時間 =", end - start)

    # バブルソート
    start = time.time()
    bubble.bubble_sort(copy.copy(arr), N)
    end = time.time()
    print("バブルソートの処理時間 =", end - start)
    
    # マージソート
    start = time.time()
    merge.merge_sort(copy.copy(arr), 0, N - 1)
    end = time.time()
    print("マージソートの処理時間 =", end - start)

    # クイックソート
    start = time.time()
    quick.quick_sort(copy.copy(arr), 0, N - 1)
    end = time.time()
    print("クイックソートの処理時間 =", end - start)