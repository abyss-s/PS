n, m = map(int, input().split())
arr = [int(input()) for _ in range(n)]
arr.sort()
left = 0
right = 1
minDiff = float('inf')
while left < n and right < n:
    diff = arr[right]-arr[left]
    if diff == m:
        print(m)
        exit(0)
    if diff >= m:
        minDiff = min(diff, minDiff)
        left+=1
    else:
        right+=1
print(minDiff)