n = int(input())
h = list(map(int, input().split()))
res = 1

for i in range(n - 1):
    if h[i] <= h[i + 1]:
        res += 1
print(res)
