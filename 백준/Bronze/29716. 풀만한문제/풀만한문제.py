j, n = map(int, input().split())
cnt = 0

for _ in range(n):
    s = input().rstrip()
    size = 0
    for ch in s:
        if ch.isupper():
            size += 4
        elif ch.islower() or ch.isdigit():
            size += 2
        elif ch == ' ':
            size += 1
    if size <= j:
        cnt += 1

print(cnt)
