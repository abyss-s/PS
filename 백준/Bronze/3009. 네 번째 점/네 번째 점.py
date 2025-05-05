# import sys
# 백준 3009번: 네번째 점
x_arr=[]
y_arr=[]
for _ in range(3):
    x,y = map(int, input().split())
    x_arr.append(x)
    y_arr.append(y)
for x in x_arr:
    if x_arr.count(x) == 1:
        x4=x
        break
for y in y_arr:
    if y_arr.count(y) == 1:
        y4=y
        break
print(x4, y4)