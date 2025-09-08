import sys

input = sys.stdin.readline
n = int(input())
arr = [list(input().strip()) for _ in range(n)]


def recur(x, y, size):
    s = arr[x][y]
    for i in range(x, x + size):
        for j in range(y, y + size):
            if arr[i][j] != s:
                mid = size // 2
                return "(" \
                    + recur(x, y, mid) \
                    + recur(x, y + mid, mid) \
                    + recur(x + mid, y, mid) \
                    + recur(x + mid, y + mid, mid) \
                    + ")"
    return s


print(recur(0, 0, n))
