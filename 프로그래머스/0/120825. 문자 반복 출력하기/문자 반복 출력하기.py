def solution(my_string, n):
    res = ""
    for c in my_string:
        res += c*n
    return res