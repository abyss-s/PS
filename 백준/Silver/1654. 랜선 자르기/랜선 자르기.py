
"""
1654번: 랜선 자르기
기존 K개의 랜선을 길이 L로 잘라 N개 이상 만들 수 있는 L의 최댓값 찾기

이분탐색: https://good.oopy.io/algorithms/binary_search
bisect_left or right으로 안되면 parametric search 이용하라
"""

import sys
input = sys.stdin.readline

# K: 보유 랜선 수, N: 필요한 조각 수
k, n = map(int, input().split())

# 이미 가지고 있는 랜선의 개수 K에 대한 길이 입력
lans = [int(input()) for _ in range(k)]

# 자를 수 있는 최소 및 최대 길이 -> 탐색 구간으로 설정
low, high = 1, max(lans)

# 만들 수 있는 최대 길이를 저장할 변수
ans = 0

while low <= high:
    mid = (low + high) // 2 # 자를 길이
    pieces = sum(x // mid for x in lans)  # mid 길이로 잘랐을 때 조각 수

    if pieces >= n:
        ans = mid        # n개 이상 나왔으면 일단 기록
        low = mid + 1   # 더 길게 잘라도 되는지 -> 오른쪽 탐색
    # 조각 수가 부족하므로 길이를 줄여야 함 -> 왼쪽 탐색
    else:
        high = mid - 1

print(ans)
