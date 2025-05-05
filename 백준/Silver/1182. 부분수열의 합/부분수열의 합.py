import sys
# import itertools import collections

# 백준 1182번: 부분 수열의 합
n, s = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

# sum_arr = [] # 합을 저장할 배열
# 부분집합이므로 차라리 비트마스킹 활용하기
cnt = 0
for msk in range(1, 1 << n): # 진부분집합
    curr_sum = 0
    for i in range(n):
        if msk & (1 << i):  # 해당 집합 내 원소의 합이 s인것만 필터링
            curr_sum += arr[i]
    if curr_sum == s:
        cnt+=1

print(cnt)