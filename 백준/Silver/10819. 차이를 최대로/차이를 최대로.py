from itertools import permutations

import sys

input = sys.stdin.readline
n = int(input())
a = list(map(int, input().split()))
a.sort()

res = 0
for perm in permutations(a):
    tmp = 0
    for i in range(n - 1):
        tmp += abs(perm[i] - perm[i + 1])
    res = max(res, tmp)

print(res)
