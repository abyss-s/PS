import sys
from collections import deque
ip = sys.stdin.readline
t = int(ip())
#
for _ in range(t):
    a, b = map(int, ip().split())
    visited = [False] * 10000
    q = deque()
    q.append((a, ""))

    while q:
        n, cnt = q.popleft()
        if n == b:
            print(cnt)
            break
            
        if not visited[n * 2 if n * 2 < 9999 else (n * 2) % 10000]:
            visited[n * 2 if n * 2 < 9999 else (n * 2) % 10000] = True
            q.append(((n * 2) % 10000, cnt + "D"))

        if not visited[n - 1 if n != 0 else 9999]:
            visited[n - 1 if n != 0 else 9999] = True
            q.append((n - 1 if n != 0 else 9999, cnt + "S"))

        l = (n % 1000) * 10 + (n // 1000)
        if not visited[l]:
            visited[l]=True
            q.append((l, cnt+"L"))

        r = (n % 10) * 1000 + (n // 10)
        if not visited[r]:
            visited[r]=True
            q.append((r, cnt+"R"))
