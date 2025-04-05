import sys
# input=sys.stdin.readline()
k=int(sys.stdin.readline())
stk=[]
for _ in range(k):
    n = int(sys.stdin.readline())
    if n!=0: stk.append(n)
    else:
        if stk:
            stk.pop()
print(sum(stk))