class MyNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None
    
    def to_string(self):
        return "(" + str(self.key) + ", " + str(self.val) + ")"

class MyHashTable:
    def __init__(self, size):
        self.tbl = [None] * size

    # ハッシュ値の計算
    def __get_hash(self, key):
        return key % len(self.tbl)

    # 要素の追加
    def insert(self, key, val):
        # ハッシュ値を計算
        hash_val = self.__get_hash(key)

        # 要素を追加
        n = MyNode(key, val)
        if self.tbl[hash_val] == None:
            self.tbl[hash_val] = n
        else: # 衝突が発生
            ptr = self.tbl[hash_val]
            while ptr.next != None:
                ptr = ptr.next
            ptr.next = n

    # 要素の削除
    def delete(self, key):
        # ハッシュ値を計算
        hash_val = self.__get_hash(key)

        # 指定した要素を削除
        prev_ptr = None
        ptr = self.tbl[hash_val]
        while ptr != None:
            if ptr.key == key:
                if ptr.next != None:
                    if prev_ptr != None:
                        prev_ptr.next = ptr.next
                    else:
                        self.tbl[hash_val] = ptr.next
                else:
                    if prev_ptr != None:
                        prev_ptr.next = None
                    else:
                        self.tbl[hash_val] = None

                return None
            
            # 次の要素を調べるためにポインタを更新
            prev_ptr = ptr
            ptr = ptr.next
    
    # 要素の探索
    def search(self, key):
        # ハッシュ値を計算
        hash_val = self.__get_hash(key)

        # 指定した要素を取得
        if self.tbl[hash_val] != None:
            ptr = self.tbl[hash_val]
            if ptr.key == key:
                return ptr
            
            while ptr.next != None:
                ptr = ptr.next
                if ptr.key == key:
                    return ptr

        # 指定した要素が存在しない
        return None
    
    # ハッシュテーブルを文字列に変換
    def to_string(self):
        stringfied_tbl = ""
        for i in range(0, len(self.tbl)):
            if self.tbl[i] != None:
                stringfied_tbl += "tbl[" + str(i) + "] -> " + self.tbl[i].to_string()
                ptr = self.tbl[i]
                while ptr.next != None:
                    ptr = ptr.next
                    stringfied_tbl += " -> " + ptr.to_string()
                stringfied_tbl += "\n"
        
        return stringfied_tbl

if __name__ == "__main__":
    # 大きさが10のハッシュテーブルを生成
    my_hash = MyHashTable(10)

    # 6つの要素を追加
    my_hash.insert(3, "Alice")
    my_hash.insert(12, "Bob")
    my_hash.insert(233, "Chris")
    my_hash.insert(95, "David")
    my_hash.insert(183, "Eav")
    my_hash.insert(25, "George")
    print("ハッシュ表の状態:")
    print(my_hash.to_string())

    # キー233に対応する要素を取得
    x = my_hash.search(233)
    if x != None:
        print("取得した要素", x.to_string())
    else:
        print("指定したキーに対応する要素が存在しません。")

    # キー233の要素を削除
    my_hash.delete(233)
    print("削除後のハッシュ表の状態:")
    print(my_hash.to_string())