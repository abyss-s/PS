# 백준 18870번: 좌표 압축
n = int(input())
arr = list(map(int, input().split()))
new_arr = sorted(set(arr))
new_map = {a: i for i, a in enumerate(new_arr)}
res = [new_map[a] for a in arr]
print(' '.join(map(str, res)))