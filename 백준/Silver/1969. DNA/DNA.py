import sys
ip=sys.stdin.readline
m,n = map(int, ip().split())
d=[]
cnt=0
result=''
for i in range(m):
    d.append(ip().strip())
for i in range(n):
    cnt_list=[0,0,0,0]
    for j in range(m):
        if d[j][i] == 'A':
            cnt_list[0]+=1
        elif d[j][i] == 'C':
            cnt_list[1]+=1
        elif d[j][i] == 'G':
            cnt_list[2]+=1
        elif d[j][i] == 'T':
            cnt_list[3]+=1
    idx=cnt_list.index(max(cnt_list))
    if idx == 0:
        result += 'A'
    elif idx==1:
        result += 'C'
    elif idx==2:
        result += 'G'
    elif idx==3:
        result += 'T'
    cnt += m - max(cnt_list)

print(result)
print(cnt)