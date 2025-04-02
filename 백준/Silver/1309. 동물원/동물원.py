import sys
input = sys.stdin.read
n = int(input().strip())
if n==0:
    print(1)
    exit()
dp = [0]*(n + 1)
dp[0] = 1
dp[1] = 3
if n > 1:
    dp[2] = 7
for i in range(3, n + 1):
    dp[i] = (2 * dp[i - 1] + dp[i - 2]) % 9901
print(dp[n])
