# 백준 1965번: 상자넣기
import sys
n = int(sys.stdin.readline())
box_sizes= list(map(int, (sys.stdin.readline().split())))
dp = n * [1]
for i in range(1, n):
    for j in range (i):
        if box_sizes[j] < box_sizes[i]:
            dp[i] = max(dp[i], dp[j]+1)
print(max(dp))

