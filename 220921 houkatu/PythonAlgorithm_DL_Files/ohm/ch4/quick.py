# スワップ関数
def swap(arr, i, j):
    tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp

# 分割
def partition(arr, p, r):
    pivot = arr[r]
    i = p
    for j in range(p, r):
        if arr[j] <= pivot:
            swap(arr, i, j)
            i += 1
    swap(arr, i, r)
    
    return i

# クイックソート
def quick_sort(arr, p, r):
    if p < r:
        q = partition(arr, p, r)
        quick_sort(arr, p, q - 1)
        quick_sort(arr, q + 1, r)

if __name__ == "__main__":
    # データの宣言と初期化
    arr = [5, 8, 1, 3, 6, 7, 0, 9, 2, 4]
    print("ソート前: ", arr)

    # 要素をソート
    quick_sort(arr, 0, len(arr) - 1)
    print("ソート後: ", arr)
