n = input().split(" ")
a, b, c = int(n[0]), int(n[1]), int(n[2])
d = int(input())

# 총 초
s = 3600 * a + 60 * b + c + d
c = s % 60
b = (s // 60) % 60
a = (s // 3600) % 24

print(f"{a} {b} {c}")
