from collections import defaultdict

def solution(gems):
    l, r = 0, 0
    typ = len(set(gems))
    n = len(gems)
    ans = [0, n - 1]

    dic = defaultdict(int)
    dic[gems[l]] += 1

    while r < n:
        if len(dic) < typ:
            r += 1
            if r == n:
                break
            dic[gems[r]] += 1
        else:
            if r - l < ans[1] - ans[0]:
                ans = [l, r]
            if dic[gems[l]] == 1:
                del dic[gems[l]]
            else:
                dic[gems[l]] -= 1
            l += 1

    return [ans[0] + 1, ans[1] + 1]
