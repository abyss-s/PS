import sys

input = sys.stdin.readline
n, t, p = map(int, input().split())
arr = list(map(int, input().split())) if n > 0 else []

if n == 0:
    print(1)
    exit()

arr.append(t)
arr.sort(reverse=True)
rank = arr.index(t) + 1

if n == p and t <= arr[-1]:
    print(-1)
else:
    print(rank)
