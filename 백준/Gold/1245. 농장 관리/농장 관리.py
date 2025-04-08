import sys
from collections import deque
input = sys.stdin.readline
dx = [-1, -1, -1, 0, 0, 1, 1, 1]
dy = [-1, 0, 1, -1, 1, -1, 0, 1]

def bfs(x, y):
    q = deque([(x, y)])
    visited[x][y] = True
    peak_arr = [(x, y)]
    is_peak = True

    while q:
        cx, cy = q.popleft()
        
        for i in range(8):
            nx, ny = cx + dx[i], cy + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                # 산봉우리가 아닌 경우
                if arr[nx][ny] > arr[x][y]:
                    is_peak = False
                elif arr[nx][ny] == arr[x][y] and not visited[nx][ny]:
                    visited[nx][ny] = True
                    q.append((nx, ny))
                    peak_arr.append((nx, ny))
    return is_peak

n,m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
visited = [[False] * m for _ in range(n)]
peak_cnt = 0
for i in range(n):
    for j in range(m):
        if not visited[i][j] and arr[i][j] > 0:
            if bfs(i, j): peak_cnt+=1
print(peak_cnt)
