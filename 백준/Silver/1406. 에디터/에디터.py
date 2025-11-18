"""
백준 1406번: 에디터
"""

import sys

input = sys.stdin.readline

l = list(input().strip())
r = []

for _ in range(int(input())):
    cmd = input().strip()
    if cmd[0] == 'L' and l:
        r.append(l.pop())
    elif cmd[0] == 'D' and r:
        l.append(r.pop())
    elif cmd[0] == 'B' and l:
        l.pop()
    elif cmd[0] == 'P':
        l.append(cmd[2])
print(''.join(l + r[::-1]))
