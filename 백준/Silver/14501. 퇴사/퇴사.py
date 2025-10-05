n = int(input())
t = [0] * n
p = [0] * n
for i in range(n):
    t[i], p[i] = map(int, input().split())

dp = [0] * (n + 1)
for i in range(n):
    dp[i + 1] = max(dp[i + 1], dp[i])

    # 오늘 상담을 하는 경우 
    if i + t[i] <= n:
        dp[i + t[i]] = max(dp[i + t[i]], dp[i] + p[i])

print(dp[n])
