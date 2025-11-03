def solution(gems):
    num = len(set(gems))  # 전체 보석 종류 개수
    d = {}
    start = 0
    ans = [0, len(gems) - 1]  # 최소 구간 후보

    for end in range(len(gems)):
        d[gems[end]] = d.get(gems[end], 0) + 1  # 보석 개수 추가

        # 투포인터
        while len(d) == num:
            if end - start < ans[1] - ans[0]:
                ans = [start, end]

            d[gems[start]] -= 1
            if d[gems[start]] == 0:
                del d[gems[start]]
            start += 1

    return [ans[0] + 1, ans[1] + 1]
