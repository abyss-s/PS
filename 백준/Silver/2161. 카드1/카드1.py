n = int(input())
arr = [x for x in range(1, n + 1)]
res = []

while len(arr) > 1:
    res.append(arr.pop(0))
    arr.append(arr.pop(0))

res.append(arr[0])
print(*res)
