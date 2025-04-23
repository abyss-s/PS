def time_transfer(t):
    h = t // 100
    m = t % 100
    return h * 60 + m

def solution(schedules, timelogs, startday):
    a = 0
    
    for i in range(len(schedules)):
        s = startday
        schedule = time_transfer(schedules[i])
        for time in timelogs[i]:
            if s in [6, 7]: # 주말 제외
                s += 1
                if s == 8:  # 월요일 
                    s = 1
                continue
            t = time_transfer(time)
            if schedule + 10 < t: 
                break
            else:
                s += 1
        else:
            a += 1

    return a
