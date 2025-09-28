n = int(input())
a = list(map(int, input().split()))
arr = []
for i in range(n):
    arr.append((a[i], i))
arr.sort()

p = [0] * n

for i in range(n):
    v, r = arr[i]
    p[r] = i

for x in p:
    print(x, end=' ')