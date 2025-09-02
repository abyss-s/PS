import sys

# sys.setRecursionlimit(100000)
input = sys.stdin.readline
dx = [-1, -1, -1, 0, 0, 1, 1, 1]
dy = [-1, 0, 1, -1, 1, -1, 0, 1]


def dfs(x, y):
    visited[x][y] = True
    stk = [(x, y)] # 스택 초기화 - 튜플

    while stk:
        x, y = stk.pop()
        for i in range(8):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < h and 0 <= ny < w:
                if not visited[nx][ny] and g[nx][ny] == 1:
                    visited[nx][ny] = True
                    stk.append((nx, ny)) # 재귀 말고 스택에 추가


while True:
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break

    g = [list(map(int, input().split())) for _ in range(h)]

    visited = [[False] * w for _ in range(h)]
    res = 0  # 섬개수
    for i in range(h):
        for j in range(w):
            if g[i][j] == 1 and not visited[i][j]:
                dfs(i, j)
                res += 1
    print(res)
