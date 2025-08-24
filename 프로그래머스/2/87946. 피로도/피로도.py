"""
프로그래머스 87946번: 피로도
"""
from itertools import permutations

def solution(k, dungeons):
    max_cnt = 0

    for order in permutations(dungeons, len(dungeons)):
        hp = k
        count = 0
        for n, c in order:
            if hp >= n:
                hp -= c
                count += 1
            else:
                break
        max_cnt = max(max_cnt, count)

    return max_cnt

