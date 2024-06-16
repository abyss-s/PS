n = int(input())
for _ in range(n):
    arr = list(map(int, input().split(" ")))
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print("")
    if arr.count(17) == 1 and arr.count(18) == 1:
        print("both")
    elif arr.count(17) == 1 and arr.count(18) == 0:
        print("zack")
    elif arr.count(17) == 0 and arr.count(18) == 1:
        print("mack")
    else:
        print("none")
    print("")
