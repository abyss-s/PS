n, k = map(int, input().split())
dp = [[0] * (n + 1) for _ in range(k + 1)]

for i in range(k + 1):
    dp[i][0] = 1

for k in range(1, k + 1):
    for n in range(1, n + 1):
        dp[k][n] = (dp[k][n - 1] + dp[k - 1][n]) % 1000000000

print(dp[k][n])
