n, m = map(int, input().split())
arr = [list(map(int, input().strip())) for _ in range(n)]
max_len = 0
for i in range(n):
    for j in range(m):
        for k in range(1, min(n-i, m-j) + 1):
            if arr[i][j] == arr[i][j+k-1] == arr[i+k-1][j] == arr[i+k-1][j+k-1]:
                max_len = max(max_len, k)
print(max_len ** 2)