n, k = map(int, input().split())
arr = list(map(int, input().split()))

cnt = 0
for i in range(n - 1, 0, -1):
    max_idx = i
    for j in range(i):
        if arr[j] > arr[max_idx]:
            max_idx = j
    if max_idx != i:
        arr[i], arr[max_idx] = arr[max_idx], arr[i]
        cnt += 1
        if cnt == k:
            print(arr[max_idx], arr[i])
            break
    if cnt >= k:
        break
else:
    print(-1)
