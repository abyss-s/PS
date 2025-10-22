def solution(players, m, k):
    arr = []
    for pl in players:
        summ = sum((arr + [1])[-k:]) * m
        if summ > pl:
            arr = arr + [0]
        else:
            add = (pl - summ) // m + 1
            arr += [add]
    return sum(arr)