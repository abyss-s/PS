n, m = map(int, input().split())
pack = []
each = []
for _ in range(m):
    p, e= map(int, input().split())
    pack.append(p )
    each.append(e)
pack.sort()
each.sort()
res = min((n//6)*pack[0]+(n%6)*each[0],(n//6+1)*pack[0], n * each[0])
print(res)