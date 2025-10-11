n = int(input())
arr = [int(input()) for _ in range(n)]
arr.sort(reverse=True)
res = 0
for i in range(n):
    w = arr[i] * (i + 1)
    res = max(w, res)
print(res)
