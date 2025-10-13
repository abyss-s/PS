import sys

input = sys.stdin.readline
n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
cnt = {-1: 0, 0: 0, 1: 0}


def recur(x, y, size):
    first = arr[x][y]
    for i in range(x, x + size):
        for j in range(y, y + size):
            if arr[i][j] != first:
                new_size = size // 3
                for dx in range(3):
                    for dy in range(3):
                        recur(x + dx * new_size, y + dy * new_size, new_size)
                return
    cnt[first] += 1  # 전부 같은 숫자였을 때


recur(0, 0, n)

print(cnt[-1])
print(cnt[0])
print(cnt[1])
