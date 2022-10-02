import my_dlist

class MyQueue:
    def __init__(self):
        self.dlist = my_dlist.MyDoublyLinkedList()

    # エンキュー
    def enqueue(self, element):
        self.dlist.append(element)

    # デキュー
    def dequeue(self):
        e = self.dlist.get(0)
        self.dlist.delete(e)

        return e

    # キューの中身を文字列に変換
    def to_string(self):
        return self.dlist.to_string()

if __name__ == "__main__":
    # 空のキューを生成
    my_queue = MyQueue()

    # 要素のエンキューとキューの中身の表示
    my_queue.enqueue(my_dlist.MyElement(6))
    my_queue.enqueue(my_dlist.MyElement(2))
    my_queue.enqueue(my_dlist.MyElement(3))
    my_queue.enqueue(my_dlist.MyElement(7))
    my_queue.enqueue(my_dlist.MyElement(9))
    if my_queue.dlist.head != None and my_queue.dlist.tail != None:
        print("head = ", my_queue.dlist.head.val, ", tail = ", my_queue.dlist.tail.val)
    print("初期値: ", my_queue.to_string())

    # デキュー2回
    x = my_queue.dequeue()
    y = my_queue.dequeue()
    if x != None and y != None:
        print("取り出した要素:", x.val, y.val)
    if my_queue.dlist.head != None and my_queue.dlist.tail != None:
        print("head = ", my_queue.dlist.head.val, ", tail = ", my_queue.dlist.tail.val)
    print("キューの状態: ", my_queue.to_string())

    # キューに新たな要素をエンキュー
    my_queue.enqueue(my_dlist.MyElement(5))
    my_queue.enqueue(my_dlist.MyElement(8))
    if my_queue.dlist.head != None and my_queue.dlist.tail != None:
        print("head = ", my_queue.dlist.head.val, ", tail = ", my_queue.dlist.tail.val)
    print("キューの状態: ", my_queue.to_string())
