import sys
from collections import deque

# 백준 5430번: AC
t = int(sys.stdin.readline())

for _ in range(t):
    p = sys.stdin.readline().strip()
    n = int(sys.stdin.readline())
    arr = sys.stdin.readline().strip()
    if n == 0:
        arr = deque()
    else:
        arr = deque(map(int, arr[1:-1].split(',')))

    is_reversed = False
    is_error = False

    for cmd in p:
        if cmd == 'R':
            is_reversed = not is_reversed
        elif cmd == 'D':
            if not arr:
                is_error = True
                break
            if is_reversed:
                arr.pop()
            else:
                arr.popleft()
    if is_error:
        print("error")
    else:
        if is_reversed:
            arr.reverse()

        print(f"[{','.join(map(str, arr))}]")