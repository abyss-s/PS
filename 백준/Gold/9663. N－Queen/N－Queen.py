"""
백준 9663번: N-Queen
퀸을 놓을 때에는 해당 위치의 직선, 대각선에 다른 퀸이 존재하지 않는지 확인해야 함
"""

n = int(input())
res = 0

col = [False] * n
arr1 = [False] * (2 * n - 1)
arr2 = [False] * (2 * n - 1)


def dfs(r):
    if r == n:
        return 1
    cnt = 0
    for c in range(n):
        d1 = r + c
        d2 = r - c + (n - 1)
        # 퀸을 놓을 수 있는지 검사
        if not (col[c] or arr1[d1] or arr2[d2]):
            col[c] = arr1[d1] = arr2[d2] = True
            cnt += dfs(r + 1)  # bt
            col[c] = arr1[d1] = arr2[d2] = False
    return cnt


print(dfs(0))
# print(res)
