import array

# 配列の大きさ
N = 10

def insert(arr, index, val):
    # Insertの実装。指定したインデックス以降にあるすべて要素を1つ後ろに移動
    for i in range(N - 1, index, -1):
        arr[i] = arr[i - 1]
    
    # 指定したインデックスに値を保存
    arr[index] = val

def delete(arr, index):
    # Deleteの実装。指定したインデックスより後ろにあるすべての要素を1つ前に移動
    for i in range(index, N - 1):
        arr[i] = arr[i + 1]
    
    # 配列の最後尾の要素を初期化
    arr[N - 1] = -1

if __name__ == "__main__":
    # 配列の初期化
    arr = array.array('i', [6, 2, 3, 7, 9, -1, -1, -1, -1, -1])
    print("初期値: ", arr)

    # インデックス2にある要素の取得
    x = arr[2]
    print("arr[2] = ", x)

    # インデックス2に新たな要素を挿入
    insert(arr, 2, 10)
    print("要素の挿入後: ", arr)

    # インデックス2の要素を削除
    delete(arr, 2)
    print("要素の削除後: ", arr)
