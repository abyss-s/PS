n, l = map(int, input().split())

for len in range(l, 101):
    a = (n - len * (len - 1) // 2) // len
    if a >= 0 and n == a * len + len * (len - 1) // 2:
        print(*range(a, a + len))
        break
else:
    print(-1)
