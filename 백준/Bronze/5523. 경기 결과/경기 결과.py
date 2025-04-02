import sys
input = sys.stdin.readline
n = int(input().strip())
a_cnt = 0
b_cnt = 0
for i in range(n):
    a,b = map(int,input().split())
    if a>b:a_cnt+=1
    elif a<b:b_cnt+=1
print(f"{a_cnt} {b_cnt}")