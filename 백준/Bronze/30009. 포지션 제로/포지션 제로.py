n = int(input())
x, y, r = map(int, input().split())
a, b = 0, 0

for _ in range(n):
    t = int(input())
    d = abs(t - x)
    if d < r:
        a += 1
    elif d == r:
        b += 1

print(a, b)