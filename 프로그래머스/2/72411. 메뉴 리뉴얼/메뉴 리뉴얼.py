"""
프로그래머스 72411번: 메뉴 리뉴얼
"""
from itertools import *
from collections import *

"""
[문제해석]
이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성
최소 2가지 이상, 최소 2명 이상의 손님으로부터 주문 = 조건

[접근방법]
course 길이별로 orders별 모든 조합을 생성(중복 x)
위 조건에 해당하는 조합만 answer에 저장

결과 출력시 오름차순 정렬
"""


def solution(orders, course):
    answer = []
    for i in course:
        combs = []
        for o in orders:
            order = ''.join(sorted(o))
            combs = combs + list(combinations(order, i))
            # 2가지 이상인것만 고르기
        combs = [''.join(c) for c in combs]
        cnt_arr = defaultdict(int)
        for c in combs:
            cnt_arr[c] += 1

        if not cnt_arr:
            continue
        else:
            max_cnt = max(cnt_arr.values())
            if max_cnt < 2:
                continue
            for k, v in cnt_arr.items():
                if v == max_cnt:
                    answer.append(k)

    return sorted(answer)

# orders = ["XYZ", "XWY", "WXA"]
# course = [2, 3, 4]
# print(solution(orders, course))
