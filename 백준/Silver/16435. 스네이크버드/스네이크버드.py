n, l = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()
for h in arr:
    if l >= h:
        l += 1
    else:
        break
print(l)
