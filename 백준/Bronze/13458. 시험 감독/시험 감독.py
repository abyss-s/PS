import sys
n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))
b, c = map(int, sys.stdin.readline().split())
res = 0
for x in a:
    res += 1
    rem = x - b
    if rem > 0:
        res += (rem + c - 1) // c
print(res)
