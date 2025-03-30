n = int(input())
arr = list(map(int, input().split()))
for e in sorted(set(arr)):
    print(e, end=" ")
