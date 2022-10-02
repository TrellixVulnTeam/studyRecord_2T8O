import math

# p1からp2へのベクトルを計算
def get_vector(a, b):
    return (b[0] - a[0], b[1] - a[1])

# ベクトルの大きさ（ノルム）
def get_norm(a):
    return math.sqrt(a[0] * a[0] + a[1] * a[1])

# 外積の計算
def cross_prod(a, b):
    return a[0] * b[1] - a[1] * b[0]

# yの値が最小の点のなかから、xの値が最小の点を選ぶ関数
def get_start_point(points):
    # pointsのなかで、最小のy軸の値を調べる
    min_y = 2**31
    for i in points:
        if i[1] <= min_y:
            min_y = i[1]
    
    # y軸の値がmin_yである点のなかで、xの値が最小の点を調べる
    min_x = 2**31
    min_point = None
    for i in points:
        if i[1] == min_y and i[0] < min_x:
            min_x = i[0]
            min_point = i
    
    return min_point

# ギフト包装法
def gift_wrapping(points):
    # 凸包に含まれる点のリスト
    ch = []

    # yの値が最小の点のうち、xの値が最小の点を選ぶ
    a = get_start_point(points)

    # 点pから探索開始
    while True:
        ch.append(a)
        b = points[0]
        for i in range(1, len(points)):
            c = points[i]
            if b == a:
                b = c
            else:
                # v1とv2の外積が正の値ならば、点cはv1の左側に位置する
                # 外積が0ならば、点aとb、cは直線状に位置する
                v1 = get_vector(a, b)
                v2 = get_vector(a, c)
                prod = cross_prod(v1, v2)
                if prod > 0 or (prod == 0 and get_norm(v2) > get_norm(v1)):
                    b = c

        # 走査中の点を移動
        a = b
        
        # whileループを抜ける
        if a == ch[0]:
            break

    return ch

if __name__ == "__main__":
    # 点の集合（※ 要素数は3つ以上にすること）
    points = [(1, 1), (3, 1), (2, 3), (6, 4), (4, 3), (4, 6), (1, 5), (4, 5)]
    print("点の集合:", str(points))

    # ギフト包装法の実行
    ch = gift_wrapping(points)

    # 凸包の表示
    print("凸包:", str(ch))