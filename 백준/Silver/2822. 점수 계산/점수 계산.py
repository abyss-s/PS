import sys

input = sys.stdin.readline
scores = [int(input()) for _ in range(8)]
arr = []
for i, s in enumerate(scores):
    arr.append([s, i + 1])
arr.sort(reverse=True)
arr2 = arr[:5]

total = 0
res = []
for s, i in arr2:
    total += s
    res.append(i)
res.sort()
print(total)
print(*res)
