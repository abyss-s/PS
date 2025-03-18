import sys
ip = sys.stdin.readline
s = ip().strip()
res = 0
for i in range(len(s) - 1):
    if s[i] != s[i + 1]:
        res += 1
print((res + 1) // 2)