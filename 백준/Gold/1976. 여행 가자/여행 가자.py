# 백준 1976번: 여행 가자
import sys

n = int(sys.stdin.readline())
m = int(sys.stdin.readline())

isConnected = [list(map(int, sys.stdin.readline().split())) for _ in range(n) ]
plans = list(map(int, sys.stdin.readline().split()))
plans = [p - 1 for p in plans] # 0~
visited = [False] * n

# dfs
def dfs(city):
    for i in range(n):
        if isConnected[city][i] == 1 and not visited[i]:
            visited[i] = True
            dfs(i)

s = plans[0]
visited[s] = True
dfs(s)

isValid = all(visited[i] for i in plans)

print("YES" if isValid else "NO")