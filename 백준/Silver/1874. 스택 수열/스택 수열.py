import sys
# from collections import deque
# from collections import list

# 백준 1874번: 스택 수열
import sys
n = int(sys.stdin.readline())
arr = []
stk = []
res = [] # 연산 저장 배열
curr = 1
isValid = True # 스택을 이용해 그 수열을 만들 수 있는지 없는지

for i in range(n):
    a = int(sys.stdin.readline())
    arr.append(a)

for num in arr:
    while curr <= num:
        stk.append((curr))
        res.append("+")
        curr+=1
    if stk[-1] == num:
        stk.pop()
        res.append("-")
    else:
        isValid = False
        break

if isValid:
    for elem in res:
        print(elem)
else:
    print("NO")




