function solution(number) {
  let sum = 0;
  // 숫자을 문자열로 바꾸고 각 문자별로 반복문 돌기
  for (let i = 0; i < number.length; i++) {
    // 자릿수 합 구할땐 다시 숫자형으로
    sum += Number(number[i]); 
  }
  return sum % 9;
}