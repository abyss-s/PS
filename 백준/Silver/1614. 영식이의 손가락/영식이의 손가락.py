hf = int(input())  # 다친 손가락 번호
num = int(input())  # # 다친 손가락으로 셀 수 있는 횟수

if hf == 1:
    cnt = num * 8
elif hf == 3:
    cnt = num * 4 + 2
elif hf == 5:
    cnt = num * 8 + 4
elif hf == 2:  # 검지
    cnt = num * 4 + (1 if num % 2 == 0 else 3)
else:  # 약지
    cnt = num * 4 + (3 if num % 2 == 0 else 1)

print(cnt)
