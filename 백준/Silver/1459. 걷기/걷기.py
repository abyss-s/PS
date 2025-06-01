# 백준 1459번: 걷기
import sys
x, y, w, s = map(int, sys.stdin.readline().split())  # w: 직선, s: 대각

if 2 * w <= s:
    print((x + y) * w)
else:
    min_dist = min(x, y)
    diff = abs(x - y)
    res = min_dist * s
    
    if w > s:
        if diff % 2 == 0:
            res += diff * s
        else:
            res += (diff - 1) * s + w
    else:
        res += diff * w

    print(res)
