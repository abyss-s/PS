"""
프로그래머스 후보키
https://school.programmers.co.kr/learn/courses/30/lessons/42890?language=python3
"""


from itertools import combinations
# 모든 combinations -> 유일성, 최소성 만족하는것만 거른다

# 해당 집합에 있는지 여부
def isSub(a, li):
    """
    a가 li의 부분집합인지 여부 확인
    """
    return set(a).issubset(set(li))


def solution(relation):
    # answer = 0
    r = len(relation)
    c = len(relation[0])
    keys = []

    for size in range(1, c + 1):
        combs = list(combinations(range(c), size))

        for comb in combs:
            # 유일성
            check = []
            for row in relation:
                pick = []
                for col in comb:
                    pick.append(row[col])
                check.append(tuple(pick))
            # 중복 없음
            if len(set(check)) == r:
                # 최소성
                ok = True
                for k in keys:
                    if isSub(k, comb):  # 이미 있는 키가 부분집합이면 제외
                        ok = False
                        break
                if ok:
                    keys.append(comb)
    return len(keys)