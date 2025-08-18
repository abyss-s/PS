"""
백준 2531번: 회전 초밥
투포인터, 슬라이딩 윈도우
"""

import sys
input = sys.stdin.readline

# 접시의 수 N, 초밥의 가짓수 d, 연속해서 먹는 접시의 수 k, 쿠폰 번호 c
n, d, k, c = map(int, input().split())
arr = []
for i in range(n):
    arr.append(int(input()))


"""
회전하는 벨트 = 이중 링크드 리스트
쿠폰 - K개의 초밥을 먹었을 시점에 쿠폰번호 초밥이 미포함이어야 최대
슬라이딩 윈도우로 초밥 종류수 세면서 쿠폰 초밥 체크
"""
res, cnt = 0,0
check = [0] * (d+1)
for i in range(k):
    if check[arr[i]]==0:
        cnt+=1
    check[arr[i]]+=1
res = cnt + (1 if check[c] == 0 else 0)

# sliding window
for i in range(1, n):
    # 앞 초밥 제거
    left = arr[i-1]
    check[left]-=1
    if check[left] == 0:
        cnt-=1
    # 뒷 초밥 추가
    right = arr[(i+k-1)%n]
    if check[right] == 0:
        cnt+=1
    check[right]+=1

    res=max(res, cnt + (1 if check[c] == 0 else 0))

print(res)