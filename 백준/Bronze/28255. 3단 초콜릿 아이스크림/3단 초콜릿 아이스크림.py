import sys

input = sys.stdin.readline


def f(S):
    n = len(S)
    k = (n + 2) // 3
    X = S[:k]
    rX = X[::-1]

    return int(
        S == X + rX + X or
        S == X + rX[1:] + X or
        S == X + rX + X[1:] or
        S == X + rX[1:] + X[1:]
    )


for _ in range(int(input())):
    print(f(input().strip()))
