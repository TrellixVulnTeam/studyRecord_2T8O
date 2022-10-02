import math

# 指定したキーの要素のインデックスを返す
def binary_search(arr, key, p, r):
    if r < p:
        return None
    else:
        q = math.floor((p + r) / 2)
        if arr[q] > key:
            return binary_search(arr, key, p, q - 1)
        elif arr[q] < key:
            return binary_search(arr, key, q + 1, r)
        else:
            return q

if __name__ == "__main__":
    # データの宣言と初期化
    arr = [1, 3, 5, 8, 12, 17, 25, 33, 54, 85]
    print("配列: ", arr)

    # 数値8の探索
    index = binary_search(arr, 8, 0, len(arr) - 1)
    if index != None:
        print("arr[", index, "]に要素が見つかりました。")
    else:
        print("指定した数値は配列内に存在しません。")