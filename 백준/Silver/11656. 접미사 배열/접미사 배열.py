s = input().strip()
arr = [s[i:] for i in range(len(s))]
arr.sort()
print(*arr, sep="\n")
