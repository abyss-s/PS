import sys
# 백준 4892번: 숫자 맞추기 게임
idx = 1
while True:
    n = int(input())
    if n == 0:
        break
    t = 3 * n
    h = (t + 1) // 2 if t % 2 else t // 2
    x = 3 * h
    r = x // 9
    if n == 2 * r:
        print(f"{idx}. even {r}")
    else:
        print(f"{idx}. odd {r}")
    idx += 1
