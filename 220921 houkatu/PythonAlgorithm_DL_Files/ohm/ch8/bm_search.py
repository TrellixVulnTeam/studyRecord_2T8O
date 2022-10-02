def bm_search(text, key):
    m = len(key)  # キーワードの長さ
    skip = [m for _ in range(256)]

    # ずらし表の生成
    for i in range(m):
        skip[ord(key[i])] = m - i - 1

    # 文字列探索
    i = m - 1 # 変数textのインデックス
    while i < len(text):
        j = m - 1 # 変数keyのインデックス
        while text[i] == key[j]:
            if j == 0:
                return i
            i -= 1
            j -= 1
        i = i + max(skip[ord(text[i])], m - j)
    
    return i

if __name__ == "__main__":
    # 検索対象の文字列
    text = "ATCTGAATGCGTAAGC"
    # キーワードとなる文字列
    key = "TGCG"

    # BM 法での探索
    index = bm_search(text, key)
    
    # 探索結果の表示
    if index >= 0 and index <= len(text) - len(key):
        print("インデックス:", index)
    else:
        print("キーワードは見つかりませんでした。")