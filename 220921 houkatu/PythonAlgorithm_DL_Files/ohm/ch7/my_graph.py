# 頂点
class MyVertex:
    def __init__(self, id):
        self.id = id
        self.adj = set()

    # 頂点の情報を表示
    def to_string(self):
        return str(self.id) + ", adj = " + str(self.adj)

# 2つの頂点を互いに接続
def connect(vertices, i, j):
    vertices[i].adj.add(j)
    vertices[j].adj.add(i)

if __name__ == "__main__":
    # 頂点の数
    N = 5

    # 頂点の生成
    vertices = []
    for i in range(0, N):
        vertices.append(MyVertex(i))
    
    # 辺の設定
    connect(vertices, 0, 1)
    connect(vertices, 0, 4)
    connect(vertices, 1, 2)
    connect(vertices, 1, 3)
    connect(vertices, 2, 4)
    connect(vertices, 2, 3)
    connect(vertices, 3, 2)
    connect(vertices, 4, 3)

    # 各頂点の表示
    for i in range(0, N):
        print(vertices[i].to_string())