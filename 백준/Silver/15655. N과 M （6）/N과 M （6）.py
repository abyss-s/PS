import sys

input = sys.stdin.readline
n, m = map(int, input().split())
arr = sorted(list(map(int, input().split())))
total = []


def bt(s):
    if len(total) == m:
        print(*total)
        return

    for i in range(s, n):
        total.append(arr[i])
        bt(i + 1)
        total.pop()


bt(0)
