import sys
ip = sys.stdin.readline
N, K = map(int, ip().split())
arr = list(map(int, ip().split()))
res = 0
for i in range(N):
    res += arr[i]
    if res > K:
        print(i + 1)
        exit()
for i in range(N - 1, -1, -1):
  res += arr[i]
  if res > K:
    print(i + 1)
    exit()
