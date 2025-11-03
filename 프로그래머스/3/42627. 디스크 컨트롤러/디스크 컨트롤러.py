import heapq

def solution(jobs):
    t = 0
    f = 0
    h = []
    tot = 0
    pre = -1

    while f < len(jobs):
        for j in jobs:
            if pre < j[0] <= t:
                heapq.heappush(h, [j[1], j[0]])
        if len(h) > 0:
            cur = heapq.heappop(h)
            pre = t
            t += cur[0]
            tot += (t - cur[1])
            f += 1
        else:
            t += 1
    return int(tot / len(jobs))
