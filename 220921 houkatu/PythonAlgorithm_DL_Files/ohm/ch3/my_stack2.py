class MyElement:
    def __init__(self, val):
        self.val = val   # 要素がもつ値
        self.next = None # 次の要素へのポインタ

class MyStack:
    def __init__(self):
        self.top = None

    # スタックが空かどうか判定
    def is_empty(self):
        if self.top == None:
            return True
        else:
            return False

    # プッシュ
    def push(self, element):
        if self.top != None:
            element.next = self.top
        self.top = element

    # ポップ
    def pop(self):
        # スタックが空のの場合
        if self.is_empty():
            return None

        # 一番上の要素を取り出して、当該要素をスタックから削除
        e = self.top
        self.top = e.next
            
        # 取り出す要素のインスタンスがもつポインタを初期化
        e.next = None

        return e

    # スタックの中身を文字列に変換
    def to_string(self):
        stringfied_data = "[ "
        ptr = self.top
        while ptr != None:
            stringfied_data += str(ptr.val) + " "
            ptr = ptr.next
        
        return stringfied_data + "]"

if __name__ == "__main__":
    # 空のスタックを生成
    my_stack = MyStack()

    # 要素のプッシュとスタックの中身の表示
    my_stack.push(MyElement(6))
    my_stack.push(MyElement(2))
    my_stack.push(MyElement(3))
    my_stack.push(MyElement(7))
    my_stack.push(MyElement(9))
    if my_stack.top != None:
        print("top = ", my_stack.top.val)
    print("初期値: ", my_stack.to_string())

    # ポップを2回実行
    x = my_stack.pop()
    y = my_stack.pop()
    if x != None and y != None:
        print("取り出した要素:", x.val, y.val)
    if my_stack.top != None:
        print("top = ", my_stack.top.val)
    print("スタックの状態: ", my_stack.to_string())

    # スタックに新たな要素をプッシュ
    my_stack.push(MyElement(5))
    my_stack.push(MyElement(8))
    if my_stack.top != None:
        print("top = ", my_stack.top.val)
    print("スタックの状態: ", my_stack.to_string())