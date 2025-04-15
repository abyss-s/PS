arr=[int(input()) for _ in range(7)]
arr=[n for n in arr if n%2==1]
if arr:
    print(sum(arr))
    print(min(arr))
else:print(-1)