# import heapq
from collections import deque
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
d = deque([i for i in range(1, n+1)])
idxs = list(map(int, input().split()))
cnt = 0
for num in idxs:
    while True:
        if d[0] == num:
            d.popleft()
            break
        else:
            if d.index(num) <= len(d )//2:
                d.rotate(-1)
                cnt+=1
            else:
                d.rotate(1)
                cnt+=1
print(cnt)
