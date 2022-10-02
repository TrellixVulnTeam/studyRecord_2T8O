import math

# 無限大の定義
INFTY = 2**31 - 1

# マージ関数
def merge(arr, p, q, r):
    # 部分配列をleftとrightにコピー
    n = q - p + 1
    m = r - q
    left = [INFTY] * (n + 1)
    right = [INFTY] * (m + 1)
    for i in range(0, n):
        left[i] = arr[p + i]
    for j in range(0, m):
        right[j] = arr[q + j + 1]

    # 2つの配列leftとrightをマージ
    i = j = 0
    for k in range(p, r + 1):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1

# マージソート
def merge_sort(arr, p, r):
    if p < r:
        # 分割
        q = math.floor((p + r) / 2)
        merge_sort(arr, p, q)
        merge_sort(arr, q + 1, r)
        # 統治
        merge(arr, p, q, r)

if __name__ == "__main__":
    # データの宣言と初期化
    arr = [5, 9, 2, 1, 7, 3, 4, 6, 8, 0]
    print("ソート前: ", arr)

    # 要素をソート
    merge_sort(arr, 0, len(arr) - 1)
    print("ソート後: ", arr)
