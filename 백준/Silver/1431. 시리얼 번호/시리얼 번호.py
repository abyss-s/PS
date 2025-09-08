import sys

input = sys.stdin.readline
n = int(input())
arr = [input().strip() for _ in range(n)]


def cal_sum(inputs):
    result = 0
    for i in inputs:
        if i.isdigit():
            result += int(i)
    return result


arr.sort(key=lambda x: (len(x), cal_sum(x), x))
print(*arr, sep="\n")
