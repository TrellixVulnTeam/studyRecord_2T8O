# 頂点iとjを辺で接続
def connect(graph, i, j):
    graph[i][j] = 1
    graph[j][i] = 1

# グラフ情報の表示
def pretty_print(graph, n):
    print("   ", end = "")
    for i in range(0, n):
        print(i, " ", end = "")
    print("")

    for i in range(0, n):
        print(i, " ", end = "")
        for j in range(0, n):
            print(graph[i][j], " ", end = "")
        print("")

if __name__ == "__main__":
    # 頂点の数
    N = 5

    # 隣接行列の生成と初期化
    graph = [[0 for i in range(0, N)] for j in range(0, N)]

    # 辺の設定
    connect(graph, 0, 1)
    connect(graph, 0, 4)
    connect(graph, 1, 2)
    connect(graph, 1, 3)
    connect(graph, 1, 4)
    connect(graph, 2, 3)
    connect(graph, 3, 4)

    # グラフの情報を表示
    pretty_print(graph, N)