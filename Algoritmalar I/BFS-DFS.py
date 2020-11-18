from collections import defaultdict


class Graph:
    """ Graph olarak tanımlıyoruz değişkenimizi. """

    def __init__(self):
        """ Graph'ımız defaultdict içerisinde liste tutuyor. """
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        """ Gelen ilk parametre index ikinci parametre ise index içerisine yazılacak olan değeri içeriyor. """
        self.graph[u].append(v)

    def BFS(self, s):
        """ Breadth-First-Search Algoritması. """

        # İlk önce tüm değerlerimizin gezilmediğini göstermek için başka bir listeye
        # tüm değerlerini false olacak şekilde giriyoruz.
        visited = [False] * (len(self.graph))

        # Değerlerin işleneceği kuyruğumuzu tanımlıyoruz.
        queue = []

        queue.append(s)
        visited[s] = True

        while queue:
            s = queue.pop(0)

            print(s, end="->")

            # Get all adjacent vertices of the
            # dequeued vertex s. If a adjacent
            # has not been visited, then mark it
            # visited and enqueue it
            # burasını çevirmeye üşendim.
            for i in self.graph[s]:
                if visited[i] == False:
                    queue.append(i)
                    visited[i] = True

    def DFSUtil(self, v, visited):

       # Gönderilen değeri ziyaret edildi olarak işaretledik.
        visited.add(v)
        print(v, end='->')

        # Komşularını buluyoruz.
        for neighbour in self.graph[v]:
            if neighbour not in visited:
                self.DFSUtil(neighbour, visited)

    def DFS(self, v):

        # Bir tane küme oluşturuyoruz gezilen değerleri tutması için.
        visited = set()

        # recursive olarak fonksiyon değerleri getirecek.
        self.DFSUtil(v, visited)


def main():
    myGraph = Graph()

    myGraph.add_edge(0, 1)
    myGraph.add_edge(0, 2)
    myGraph.add_edge(1, 2)
    myGraph.add_edge(2, 0)
    myGraph.add_edge(2, 3)
    myGraph.add_edge(3, 3)

    print("BFS")
    myGraph.BFS(2)
    print("\nDFS")
    myGraph.DFS(2)


if __name__ == "__main__":
    main()
