import sys

from collections import Counter

input = sys.stdin.readline
n = int(input())
have = list(map(int, input().split()))
m = int(input())
ques = list(map(int, input().split()))
cnt = Counter(have)
print(' '.join(str(cnt[q]) for q in ques))
