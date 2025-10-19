def solution(survey, choices):
    answer = ''
    mbti = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}

    for i in range(len(survey)):
        left, right = survey[i]
        choice = choices[i]

        if choice == 1:  # 매우 비동의
            mbti[left] += 3
        elif choice == 2:  # 비동의
            mbti[left] += 2
        elif choice == 3:  # 약간 비동의
            mbti[left] += 1
        elif choice == 4:  # 모르겠음
            continue
        elif choice == 5:  # 약간 동의
            mbti[right] += 1
        elif choice == 6:  # 동의
            mbti[right] += 2
        elif choice == 7:  # 매우 동의
            mbti[right] += 3

    answer += 'R' if mbti['R'] >= mbti['T'] else 'T'
    answer += 'C' if mbti['C'] >= mbti['F'] else 'F'
    answer += 'J' if mbti['J'] >= mbti['M'] else 'M'
    answer += 'A' if mbti['A'] >= mbti['N'] else 'N'

    return answer
