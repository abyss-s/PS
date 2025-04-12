import sys
import heapq
def dsk(s, v, g):
    dist = [1e8] * (v + 1)
    dist[s] = 0
    pq = [(0, s)]
    while pq:
        curr_d, curr_v = heapq.heappop(pq)
        if curr_d > dist[curr_v]:
            continue
        for next, w in g[curr_v]:
            d = curr_d + w
            if d < dist[next]:
                dist[next] = d
                heapq.heappush(pq, (d, next))
    return dist

ip = sys.stdin.readline
v,e = map(int,ip().split())
k = int(ip())
g = [[] for _ in range(v + 1)]
for i in range(e):
    a,b,w = map(int, ip().split())
    g[a].append((b, w))
dist = dsk(k,v,g)
for i in range(1, v+1):
    if dist[i] == 1e8:
        print('INF')
    else:
        print(dist[i])


