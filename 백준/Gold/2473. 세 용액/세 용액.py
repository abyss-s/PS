import sys

input = sys.stdin.readline
n = int(input())
arr = list(map(int, input().split()))
arr.sort()
res = [0, 0, 0]
min_val = 10 ** 18

for i in range(n - 2):
    l, r = i + 1, n - 1
    while l < r:
        a = arr[l] + arr[i] + arr[r]
        if abs(a) < min_val:
            min_val = abs(a)
            res = [arr[i], arr[l], arr[r]]
        if a > 0:
            r -= 1
        elif a < 0:
            l += 1
        else:  # 합이 정확히 0일땐 종료
            print(arr[i], arr[l], arr[r])
            exit()

print(res[0], res[1], res[2])
