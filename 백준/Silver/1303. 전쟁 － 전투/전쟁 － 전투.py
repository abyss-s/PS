import sys
from collections import deque
input = sys.stdin.readline
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y, c):
    q = deque([(x, y)])
    v[x][y] = True
    cnt = 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                if not v[nx][ny] and arr[nx][ny] == c:
                    v[nx][ny] = True
                    q.append((nx, ny))
                    cnt += 1
    return cnt

m, n = map(int, input().split())
arr = [list(input().strip()) for _ in range(n)]
v = [[False] * m for _ in range(n)]
b, w = 0, 0
for i in range(n):
    for j in range(m):
        if not v[i][j] and arr[i][j] == 'B':
            b += bfs(i, j, 'B') ** 2
        elif not v[i][j] and arr[i][j] == 'W':
            w += bfs(i, j, 'W') ** 2
print(w, b)
