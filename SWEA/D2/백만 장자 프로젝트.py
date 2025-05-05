import sys

# SWEA 1859번: 백만 장자 프로젝트
T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    arr = list(map(int, input().split()))
    max_profit = 0
    max_price = 0
    for price in reversed(arr):
        if price > max_price:
            max_price = price
        else:
            max_profit += max_price - price
    print(f"#{test_case} {max_profit}")
