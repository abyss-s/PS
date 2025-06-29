# 백준 15651번: N과 M (3)
import sys
n,m = map(int, sys.stdin.readline().split())
arr = []
def bt():
    if len(arr)==m:
        print(' '.join(map(str, arr)))
        return
    for i in range(1, n+1):
        arr.append(i)
        bt()
        arr.pop()
bt()

