n = input().split(" ")
a, b = int(n[0]), int(n[1])
m = (b - a) / 400
print(1 / (1 + 10**m))
