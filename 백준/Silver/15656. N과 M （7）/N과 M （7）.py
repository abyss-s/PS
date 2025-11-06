import sys

input = sys.stdin.readline
n, m = map(int, input().split())
nums = list(map(int, input().split()))
nums.sort()
arr = []


def b():
    if len(arr) == m:
        print(*arr)
        return
    for i in nums:
        arr.append(i)
        b()
        arr.pop()


b()
