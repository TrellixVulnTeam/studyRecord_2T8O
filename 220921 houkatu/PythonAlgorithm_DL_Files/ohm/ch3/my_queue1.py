class MyQueue:
    def __init__(self, size):
        self.size = size
        self.arr = [-1] * size
        self.head = 0
        self.tail = 0

    # エンキュー
    def enqueue(self, val):
        # キューに空きがない場合
        if (self.tail + 1) % self.size == self.head:
            return None
        
        # 要素の保存
        self.arr[self.tail] = val
          
        # ポインタの更新
        self.tail = (self.tail + 1) % self.size

    # デキュー
    def dequeue(self):
        # キューが空の場合
        if self.head == self.tail:
            return None
        
        # 要素の取り出し
        e = self.arr[self.head]
        self.arr[self.head] = -1

        # ポインタの更新
        self.head = (self.head + 1) % self.size

        return e

    # キューの中身を文字列に変換
    def to_string(self):
        stringfied_data = "[ "
        index = self.head
        while index != self.tail:
            stringfied_data += str(self.arr[index]) + " "
            if index == self.size - 1:
                index = 0
            else:
                index += 1
        
        return stringfied_data + "]"

if __name__ == "__main__":
    # 最大の大きさが6の空のキューを生成
    my_queue = MyQueue(6)

    # 要素のエンキューとキューの中身の表示
    my_queue.enqueue(6)
    my_queue.enqueue(2)
    my_queue.enqueue(3)
    my_queue.enqueue(7)
    my_queue.enqueue(9)
    print("head = ", my_queue.head, ", tail = ", my_queue.tail)
    print("初期値: ", my_queue.to_string())

    # デキュー2回
    x = my_queue.dequeue()
    y = my_queue.dequeue()
    if x != None and y != None:
        print("取り出した要素:", x, y)
    print("head = ", my_queue.head, ", tail = ", my_queue.tail)
    print("キューの状態: ", my_queue.to_string())

    # キューに新たな要素をエンキュー
    my_queue.enqueue(5)
    my_queue.enqueue(8)
    print("head = ", my_queue.head, ", tail = ", my_queue.tail)
    print("キューの状態: ", my_queue.to_string())
