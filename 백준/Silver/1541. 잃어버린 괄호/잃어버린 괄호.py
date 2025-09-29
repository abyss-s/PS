str = input().split('-')

first = str[0].split('+')
res = 0
for num in first:
    res += int(num)

for i in str[1:]:
    nums = i.split('+')
    tmp = 0
    for num in nums:
        tmp += int(num)
    res -= tmp

print(res)
