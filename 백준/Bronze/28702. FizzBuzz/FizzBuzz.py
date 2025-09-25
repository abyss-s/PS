arr = [input().strip() for _ in range(3)]


def fb(x):
    if x % 3 == 0 and x % 5 == 0:
        return "FizzBuzz"
    elif x % 3 == 0:
        return "Fizz"
    elif x % 5 == 0:
        return "Buzz"
    return str(x)


for i in range(3):
    if arr[i].isdigit():
        num = int(arr[i])
        nxt = num + (3 - i)
        print(fb(nxt))
        break
