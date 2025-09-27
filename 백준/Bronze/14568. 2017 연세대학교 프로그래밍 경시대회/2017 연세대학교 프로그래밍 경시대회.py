"""
최종 나머지가 0이어야 한다.
모두가 1개 이상의 사탕을 지녀야한다.
택희가 받는 사탕의 수는 짝수개야함.
그러면 x x+2 y
"""

n = int(input())
cnt = 0
for a in range(1, n):  # 영훈
    for b in range(a + 2, n):  # 남규 =l 영훈+2
        c = n - a - b  # 택희(나머지
        if c >= 1 and c % 2 == 0:
            cnt += 1
print(cnt)
