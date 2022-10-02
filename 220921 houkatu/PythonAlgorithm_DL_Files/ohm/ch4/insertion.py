# 挿入ソート
def insertion_sort(arr, n):
    for i in range(1, n): # 外側のループ
        val = arr[i]

        # arr[i]をソート済みのarr[0]~arr[i - 1]のいずれかへ挿入
        j = i - 1
        while j >= 0 and arr[j] > val: # 内側のループ
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = val

if __name__ == "__main__":
    # データの宣言と初期化
    arr = [5, 9, 2, 1, 7, 3, 4, 6, 8, 0]
    print("ソート前: ", arr)

    # 要素をソート
    insertion_sort(arr, len(arr))
    print("ソート後: ", arr)
