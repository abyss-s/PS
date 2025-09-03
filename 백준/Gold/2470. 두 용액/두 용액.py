import sys
from json.encoder import INFINITY

input = sys.stdin.readline
n = int(input())
arr = list(map(int, input().split()))
arr.sort()
res = [0, 0]
min_val = INFINITY
l, r = 0, n - 1

while l < r:
    a = arr[l] + arr[r]
    if abs(a) < min_val:
        min_val = abs(a)
        res = [arr[l], arr[r]]
    if a > 0:
        r -= 1
    elif a < 0:
        l += 1
    else:  # 합이 정확히 0일땐 종료
        print(arr[l], arr[r])
        exit()

print(res[0], res[1])
