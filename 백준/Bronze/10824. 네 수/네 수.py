
"""
10824번: 네 수
A와 B를 붙인 수와 C와 D를 붙인 수의 합 구하기 - 문자열 더하기
"""

import sys
input = sys.stdin.readline()

input_arr = list(map(str, input.split()))
str1 = input_arr[0] + input_arr[1]
str2 = input_arr[2] + input_arr[3]
print(int(str1) + int(str2))
