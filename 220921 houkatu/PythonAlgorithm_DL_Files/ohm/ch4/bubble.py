# スワップ関数
def swap(arr, i, j):
    tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp

# バブルソート
def bubble_sort(arr, n):
    for i in range(0, n - 1): # 外側のループ
        for j in range(n - 1, i, -1): # 内側のループ
            if arr[j] < arr[j - 1]:
                swap(arr, j, j - 1)

if __name__ == "__main__":
    # データの宣言と初期化
    arr = [5, 9, 2, 1, 7, 3, 4, 6, 8, 0]
    print("ソート前: ", arr)

    # 要素をソート
    bubble_sort(arr, len(arr))
    print("ソート後: ", arr)
    