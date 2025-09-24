a, b = map(int, input().split())

res = str(a // b) + "."
a = (a % b) * 10

for i in range(1000):
    res += str(a // b)
    a = (a % b) * 10
print(res)
