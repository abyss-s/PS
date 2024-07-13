n = int(input())
arr_str = list(map(int, input().split()))
sum = 0
for elem in arr_str:
    sum += elem
if n >= 2:
    for _ in range(n - 1):
        sum += 8
day = sum // 24
hour = sum % 24
print(day, hour)
