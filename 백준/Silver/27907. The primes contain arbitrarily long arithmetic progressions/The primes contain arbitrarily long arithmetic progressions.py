import sys

input = sys.stdin.readline

arr = [
    199, 409, 619, 829, 1039,
    1249, 1459, 1669, 1879, 2089
]

n = int(input())
print(*arr[:n])
