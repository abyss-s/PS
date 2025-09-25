import math

n, k = map(int, input().split())
a = math.factorial(n)
b = math.factorial(k) * math.factorial(n - k)
nCk = a // b
print(nCk)
