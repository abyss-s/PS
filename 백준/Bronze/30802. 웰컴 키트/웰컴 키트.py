n=int(input())
lst=list(map(int,input().split()))
t,p = map(int,input().split())
sh=0

for i in lst:
    if i==0:
        continue
    elif i<=t:
        sh+=1
    elif i%t==0:
        sh+= i // t
    else:
        sh+= i // t + 1

p_cnt= n//p
pen=n%p
print(sh)
print(f'{p_cnt} {pen}')