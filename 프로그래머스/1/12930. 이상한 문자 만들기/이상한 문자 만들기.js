function solution(s) {
    let arr = s.split(' ');  // 공백 기준으로 나누기
    // arr의 요소를 str로 선언하고 다시 문자 c로 나눈 배열 만들기
    let res = arr.map(str => 
        str.split('') 
         .map((c, i)=> i % 2 == 0 ? c.toUpperCase() : c.toLowerCase()).join('')
        ); // 문자열, 인덱스 에 대해 조건대로 짝수 및 홀수 각각 대문자 소문자 처리 후 다시 조인
    return res.join(' '); // 공백으로 조인
}