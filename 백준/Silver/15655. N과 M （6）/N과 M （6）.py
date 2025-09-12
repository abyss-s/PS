from itertools import combinations

n, m = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()
for c in combinations(arr, m):
    print(*c)
