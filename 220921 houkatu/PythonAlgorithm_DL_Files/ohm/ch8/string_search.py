import bf_search
import bm_search
import time
import random

if __name__ == "__main__":
    # 文字列をランダムに生成
    charset = ["A", "T", "G", "C"]
    text = []
    for i in range(1000000):
        text.append(random.choice(charset))

     # 探索したい部分文字列
    pattern = "AAACCCCCT"

    # 力まかせ法での探索
    start = time.time()
    index = bf_search.bf_search(text, pattern)
    end = time.time()
    print("インデックス: ", index)
    print("力まかせ法の探索時間 =", end - start)

    # BM法での探索
    start = time.time()
    index = bm_search.bm_search(text, pattern)
    end = time.time()
    print("インデックス: ", index)
    print("BM法の探索時間 =", end - start)