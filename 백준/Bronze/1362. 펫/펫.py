sc = 0

while True:
    o, w = map(int, input().split())

    if o == 0 and w == 0:
        break

    sc += 1
    status = ""

    while True:

        C, S = input().split()
        S = int(S)

        if C == '#' and S == 0:
            if status == 'RIP':
                print(sc, status)
            else:
                print(sc, ':-)' if o // 2 < w < o * 2 else ':-(')
            break
        if w > 0:
            if C == 'E':
                w -= S
            if C == 'F':
                w += S
        if w <= 0:
            status = "RIP"
