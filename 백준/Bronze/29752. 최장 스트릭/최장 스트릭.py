n = int(input())
arr = list(map(int, input().split()))

res = 0
cnt = 0
for x in arr:
    if x != 0:
        cnt += 1
        res = max(res, cnt)
    else:
        cnt = 0

print(res)
