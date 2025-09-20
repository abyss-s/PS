import sys

input = sys.stdin.readline

while True:
    s = input().strip()
    if s == "":
        exit(0)

    n = len(s)
    double = s + s
    value = int(s)
    is_cyclic = True

    for k in range(1, n + 1):
        cur = str(value * k)
        if len(cur) < n:
            cur = "0" * (n - len(cur)) + cur

        if cur not in double:
            is_cyclic = False
            break

    if is_cyclic:
        print(f"{s} is cyclic")
    else:
        print(f"{s} is not cyclic")
