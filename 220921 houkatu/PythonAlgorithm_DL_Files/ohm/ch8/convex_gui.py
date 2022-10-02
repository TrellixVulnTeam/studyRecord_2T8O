import convex
import random
import tkinter

if __name__ == "__main__":
    # ランダムに100個の点を生成
    points = []
    for i in range(0, 100):
        while True:
            p = (random.randint(10, 590), random.randint(10, 590))
            if points.count(p) == 0:
                points.append(p)
                break
    print("点の集合:", str(points))

    # ギフト包装法の実行
    ch = convex.gift_wrapping(points)

    # 凸包の表示
    print("凸包:", str(ch))

    # ウィンドウの作成
    window = tkinter.Tk()
    window.title(u"ギフト包装法による凸包計算プログラム")
    window.geometry("600x600")

    # キャンバスの作成
    canvas = tkinter.Canvas(window, width = 600, height = 600)
    canvas.create_rectangle(0, 0, 600, 600, fill = 'white')
    canvas.place(x=0, y=0)

    # すべての点を表示
    for i in points:
        canvas.create_oval(i[0], i[1], i[0] + 5, i[1] + 5, fill='black')

    # 凸包に含まれる点に線を引く
    for i in range(0, len(ch)):
        # points[i]からpoints[j]に線を引くためにインデックスを計算
        j = i + 1
        if i == len(ch) - 1:
            j = 0
        # 線を引く
        canvas.create_line(ch[i][0], ch[i][1], ch[j][0], ch[j][1])

    # ウィンドウを起動
    window.mainloop()