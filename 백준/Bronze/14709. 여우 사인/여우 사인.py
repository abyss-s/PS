"""
백준 14709번
"""

import sys

n = int(sys.stdin.readline())
touch = set()
bad = False

for _ in range(n):
    a, b = map(int, sys.stdin.readline().split())
    if a in (2, 5) or b in (2, 5):
        bad = True
    touch.add((a, b))
    touch.add((b, a))

need = [(1, 3), (3, 4), (1, 4)]

if not bad and all(p in touch for p in need):
    print("Wa-pa-pa-pa-pa-pa-pow!")
else:
    print("Woof-meow-tweet-squeek")
