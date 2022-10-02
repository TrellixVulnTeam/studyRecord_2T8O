# リストの生成と初期化
std_list = [6, 2, 3, 7, 9]
print("初期値: ", std_list)

# インデックス2にあるデータの取得
x = std_list[2]
print("std_list[2] = ", x)

# リストの最後尾に数値の99を追加
std_list.append(99)
print("要素の追加後: ", std_list)

# インデックス3に数値の10を挿入
std_list.insert(3, 10)
print("要素の挿入後: ", std_list)

# インデックス3のにある要素を削除
std_list.pop(3)
print("要素の削除後: ", std_list)
