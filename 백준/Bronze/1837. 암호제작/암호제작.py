p, k = map(int, input().split())
flag = True
for i in range (2, k):
    if p % i == 0:
        print("BAD",i)
        flag = False
        break
    else:
        continue

if flag == True:
    print("GOOD")

