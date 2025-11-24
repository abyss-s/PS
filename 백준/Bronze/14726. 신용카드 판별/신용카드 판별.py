"""
백준 14726번
"""

t = int(input())

for _ in range(t):
    card = list(input().strip())

    for i in range(0, 15, 2):
        doubled = int(card[i]) * 2
        if doubled >= 10:
            doubled = sum(map(int, str(doubled)))
        card[i] = str(doubled)

    total = sum(map(int, card))
    print("T" if total % 10 == 0 else "F")