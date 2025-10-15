import sys
import heapq

INF = 1e9
input = sys.stdin.readline
n = int(input())
m = int(input())
g = [[] for _ in range(n + 1)]

for _ in range(m):
    u, v, w = map(int, input().split())  # u: 출발노드, v: 도착노드, w: 연결된 간선의 가중치
    g[u].append((v, w))

s, e = map(int, input().split())
dist = [INF] * (n + 1)


def dijkstra(start):
    q = []
    dist[start] = 0
    heapq.heappush(q, (0, start))  # 비용, 노드

    while q:
        cost, now = heapq.heappop(q)
        if dist[now] < cost:
            continue

        for nxt, w in g[now]:
            tmp = cost + w
            if tmp < dist[nxt]:
                dist[nxt] = tmp
                heapq.heappush(q, (tmp, nxt))


dijkstra(s)
print(dist[e])
