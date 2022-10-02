def bf_search(text, key):
    n = len(text) - 1 # 検索対象の文字列の長さ
    m = len(key)  # キーワードの長さ

    i = 0 # 変数textのインデックス
    while i <= n - m:
        j = 0 # 変数keyのインデックス
        while j < m:
            if text[i + j] != key[j]:
                break
            j += 1
        if j == m:
            return i
        else:
            i += 1

if __name__ == "__main__":
    # 検索対象となる文字列
    text = "ATCTGAATGCGTAAGC"
    # キーワードとなる文字列
    key = "TGCG"

    # 力まかせ法による探索
    index = bf_search(text, key)
    
    # 探索結果の表示
    if index >= 0 and index <= len(text) - len(key):
        print("インデックス:", index)
    else:
        print("キーワードは見つかりませんでした。")