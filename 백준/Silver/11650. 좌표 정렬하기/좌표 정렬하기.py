# 백준 11650번: 좌표 정렬하기
import sys
n = int(sys.stdin.readline())
arr = []
for i in range(n):
    a, b = map(int, sys.stdin.readline().split())
    arr.append((a,b))
arr.sort()
for a, b in arr:
    print(a, b)