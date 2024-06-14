n = int(input())
arr = []
for _ in range(n):
    str_input = input().split(" ")
    a, b, x = int(str_input[0]), int(str_input[1]), int(str_input[2])
    arr.append(a * (x - 1) + b)
for i in range(n):
    print(arr[i])
