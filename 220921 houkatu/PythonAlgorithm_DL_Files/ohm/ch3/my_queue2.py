class MyElement:
    def __init__(self, val):
        self.val = val   # 要素がもつ値
        self.next = None # 次の要素へのポインタ

class MyQueue:
    def __init__(self):
        self.head = None
        self.tail = None

    # エンキュー
    def enqueue(self, element):
        # キューが空の場合の処理
        if self.tail == None:
            self.head = element
            self.tail = element
        else:
            # キューの最後尾に要素を追加
            self.tail.next = element
            self.tail = element

    # デキュー
    def dequeue(self):
        # キューが空の場合
        if self.head == None:
            return None

        # キューの先頭要素を取り出して、当該要素をキューから削除
        e = self.head
        self.head = e.next
        if e.next == None:
            self.tail = None

        # 取り出す要素のインスタンスがもつポインタを初期化
        e.next = None

        return e

    # キューの中身を文字列に変換
    def to_string(self):
        stringfied_data = "[ "
        ptr = self.head
        while ptr != None:
            stringfied_data += str(ptr.val) + " "
            ptr = ptr.next
        
        return stringfied_data + "]"

if __name__ == "__main__":
    # 空のキューを生成
    my_queue = MyQueue()

    # 要素のエンキューとキューの中身の表示
    my_queue.enqueue(MyElement(6))
    my_queue.enqueue(MyElement(2))
    my_queue.enqueue(MyElement(3))
    my_queue.enqueue(MyElement(7))
    my_queue.enqueue(MyElement(9))
    if my_queue.head != None and my_queue.tail != None:
        print("head = ", my_queue.head.val, ", tail = ", my_queue.tail.val)
    print("初期値: ", my_queue.to_string())

    # デキュー2回
    x = my_queue.dequeue()
    y = my_queue.dequeue()
    if x != None and y != None:
        print("取り出した要素:", x.val, y.val)
    if my_queue.head != None and my_queue.tail != None:
        print("head = ", my_queue.head.val, ", tail = ", my_queue.tail.val)
    print("キューの状態: ", my_queue.to_string())

    # キューに新たな要素をエンキュー
    my_queue.enqueue(MyElement(5))
    my_queue.enqueue(MyElement(8))
    if my_queue.head != None and my_queue.tail != None:
        print("head = ", my_queue.head.val, ", tail = ", my_queue.tail.val)
    print("キューの状態: ", my_queue.to_string())
