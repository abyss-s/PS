import sys

input = sys.stdin.readline

n = int(input().rstrip())
u = [int(input().rstrip()) for _ in range(n)]
arr = []
res = 0

for i in range(n):
    for j in range(i, n):
        arr.append(u[i] + u[j])

arr.sort()


# 이분 탐색
def func(target):
    s = 0
    e = (n * n) - 1
    while s <= e:
        mid = (s + e) // 2
        if arr[mid] == target:
            return True
        elif arr[mid] < target:
            s = mid + 1
        elif arr[mid] > target:
            e = mid - 1
    return False


for i in range(n):
    for j in range(i, n):
        target = u[j] - u[i]
        if func(target):
            res = max(res, u[j])

print(res)
