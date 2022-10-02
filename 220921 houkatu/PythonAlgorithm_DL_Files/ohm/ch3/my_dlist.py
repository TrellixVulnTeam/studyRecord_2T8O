class MyElement:
    def __init__(self, val):
        self.val = val   # 要素がもつ値
        self.prev = None # 前の要素へのポインタ
        self.next = None # 次の要素へのポインタ
    
    # 要素の情報を文字列に変換
    def to_string(self):
        str_prev = "None"
        str_next = "None"
        if self.prev != None:
            str_prev = str(self.prev.val)
        if self.next != None:
            str_next = str(self.next.val)

        return "(" + str(self.val) + ", " + str_prev + ", " + str_next + ")"

class MyDoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    # リストの最後尾に要素を追加
    def append(self, element):
        # リストが空なら先頭に要素を追加
        if self.head == None:
            # 要素の追加
            self.head = element
            self.tail = element
        else:
            # リストの最後尾に要素を追加
            self.tail.next = element
            element.prev = self.tail
            self.tail = element

    # 要素の取得
    def get(self, index):
        # インデックスの要素まで移動
        ptr = self.head
        for i in range(0, index):
            ptr = ptr.next
        
        return ptr

    # 要素の挿入
    def insert(self, index, element):
        # 挿入する位置にある要素を取得
        ptr = self.get(index)

        # 要素の挿入
        if ptr == None:
            # 最後尾に要素を挿入
            self.append(element)
        else:
            element.prev = ptr.prev
            element.next = ptr
            if ptr.prev == None:
                self.head = element
            else:
                ptr.prev.next = element
            ptr.prev = element

    # 要素の削除
    def delete(self, element):
        if element.prev == None:
            self.head = element.next
        else:
            element.prev.next = element.next
        if element.next == None:
            self.tail = element.prev
        else:
            element.next.prev = element.prev

    # リストの中身を文字列に変換
    def to_string(self):
        stringfied_data = "[ "
        ptr = self.head
        while ptr != None:
            stringfied_data += str(ptr.val) + " "
            ptr = ptr.next
        
        return stringfied_data + "]"

if __name__ == "__main__":
    # 空の双方向連結リストを生成
    my_list = MyDoublyLinkedList()

    # リストに5つの要素を追加
    my_list.append(MyElement(6))
    my_list.append(MyElement(2))
    my_list.append(MyElement(3))
    my_list.append(MyElement(7))
    my_list.append(MyElement(9))

    # リストの中身を表示
    print("初期値: ", my_list.to_string())
    print("my_list[2] = ", my_list.get(2).val)

    # インデックス4に数値の99を挿入
    x = MyElement(99)
    my_list.insert(4, x)
    print("要素の挿入後: ", my_list.to_string())
    print("挿入した要素の情報:", x.to_string())

    # インデックス3の要素を削除
    y = my_list.get(3)
    my_list.delete(y)
    print("要素の削除後: ", my_list.to_string())
