"""
백준 1920번: 수 찾기 
"""

import sys
input = sys.stdin.readline

n = int(input())
arr1 = set(map(int, input().split()))
m = int(input())
arr2 = list(map(int, input().split()))

res = []
for x in arr2:
    res.append(1 if x in arr1 else 0)
print("\n".join(map(str, res)))
