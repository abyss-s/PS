import sys

input = sys.stdin.readline

d, n = map(int, input().split())
oven = list(map(int, input().split()))
pizzas = list(map(int, input().split()))

for i in range(1, d):
    if oven[i] > oven[i - 1]:
        oven[i] = oven[i - 1]

res = d
for pizza in pizzas:
    while res > 0 and oven[res - 1] < pizza:
        res -= 1
    if res == 0:
        print(0)
        sys.exit(0)
    res -= 1
    
print(res + 1)