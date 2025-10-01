s = input().strip()
idx = s.index('*')  # * 위치
total = 0

for i, ch in enumerate(s):
    if ch == '*':
        continue
    d = int(ch)
    if (i + 1) % 2 == 1:
        total += d
    else:
        total += d * 3
# 0 mod 10
for x in range(10):
    t = total
    if (idx + 1) % 2 == 1:
        t += x
    else:
        t += x * 3
    if t % 10 == 0:
        print(x)
        break
