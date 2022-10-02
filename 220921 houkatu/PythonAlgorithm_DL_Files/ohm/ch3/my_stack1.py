class MyStack:
    def __init__(self, size):
        self.size = size
        self.arr = [-1] * size
        self.top = -1
    
    # スタックが空かどうか判定
    def is_empty(self):
        if self.top == -1:
            return True
        else:
            return False

    # プッシュ
    def push(self, val):
        # スタックに空きがない場合
        if self.top == self.size - 1:
            return None

        # 要素をプッシュ
        self.top += 1
        self.arr[self.top] = val

    # ポップ
    def pop(self):
        # スタックが空の場合
        if self.is_empty():
            return None

        # スタックの一番上にある値をポップ
        e = self.arr[self.top]
        self.arr[self.top] = -1
        self.top -= 1

        return e

    # スタックの中身を文字列に変換
    def to_string(self):
        stringfied_data = "[ "
        for i in range(0, self.top + 1):
            stringfied_data += str(self.arr[i]) + " "
        
        return stringfied_data + "]"

if __name__ == "__main__":
    # 最大の大きさが6の空のスタックを生成
    my_stack = MyStack(6)

    # 要素のプッシュとスタックの中身の表示
    my_stack.push(6)
    my_stack.push(2)
    my_stack.push(3)
    my_stack.push(7)
    my_stack.push(9)
    print("top = ", my_stack.top)
    print("初期値: ", my_stack.to_string())

    # ポップ2回
    x = my_stack.pop()
    y = my_stack.pop()
    if x != None and y != None:
        print("取り出した要素:", x, y)
    print("top = ", my_stack.top)
    print("初期値: ", my_stack.to_string())

    # スタックに新たな要素をプッシュ
    my_stack.push(5)
    my_stack.push(8)
    print("top = ", my_stack.top)
    print("初期値: ", my_stack.to_string())