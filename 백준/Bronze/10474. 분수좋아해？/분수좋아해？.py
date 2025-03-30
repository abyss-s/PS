while True:
    n, m = map(int, input().split())
    if n == 0 and m == 0:
        break
    ga = n // m  
    bunja = n % m
    print(f"{ga} {bunja} / {m}")
