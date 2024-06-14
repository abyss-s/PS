n = int(input())
arr = []
for i in range(n):
    str_input = input()
    arr.append(str_input)
for i in range(n):
    print(f"{i+1}. {arr[i]}")
