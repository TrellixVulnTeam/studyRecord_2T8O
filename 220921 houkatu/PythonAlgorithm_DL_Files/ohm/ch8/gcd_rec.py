# ユークリッドの互除法
def gcd(a, b):
    if a > b:
        return gcd(a - b, b)
    elif a < b:
        return gcd(a, b - a)
    else: # a と b は同値
        return a

if __name__ == "__main__":
    # 整数値128と88の最大公約数を求める
    x = gcd(128, 80)
    if x > 1:
        print("最大公約数 =", x)
    else:
        print("互いに素")