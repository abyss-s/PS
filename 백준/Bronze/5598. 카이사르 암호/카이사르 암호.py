str_input = str(input())
arr = []
for i in range(len(str_input)):
    arr.append(chr((ord(str_input[i]) - ord("A") - 3) % 26 + ord("A")))
for i in range(len(str_input)):
    print(arr[i], end="")
