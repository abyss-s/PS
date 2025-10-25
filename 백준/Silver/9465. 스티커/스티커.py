import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(2)]
    dp = [[0]*n for _ in range(3)]
    dp[0][0], dp[1][0], dp[2][0] = arr[0][0], arr[1][0], 0

    for i in range(1, n):
        dp[0][i] = arr[0][i] + max(dp[1][i - 1], dp[2][i - 1])
        dp[1][i] = arr[1][i] + max(dp[0][i - 1], dp[2][i - 1])
        dp[2][i] = max(dp[0][i-1], dp[1][i-1], dp[2][i-1])

    print(max(dp[0][-1], dp[1][-1], dp[2][-1]))
