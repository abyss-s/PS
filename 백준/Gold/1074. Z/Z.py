import sys
input = sys.stdin.readline

def recur(n,r,c):
    if n==0: # 1*1
        return 0
    h=2**(n-1)  # half
    s=h*h 
    if r < h and c < h: #1
        return recur(n-1,r,c)
    elif r < h and c >= h: #2
        return s+recur((n-1),r,c-h)
    elif r >= h and c<h: #3
        return 2*s+recur(n-1,r-h,c)
    else: #4
        return 3 * s + recur(n-1, r - h, c - h)

n,r,c=map(int,input().split())
print(recur(n,r,c))
