// 프로그래머스: 이진 변환 반복하기
const solution = (s) => {
  let cntToBinary = 0;
  let cntZero = 0;
  while (s != '1') {
    let tmp = [...s];
    if (s.includes('0')) {
      cntZero += tmp.filter((e) => e == '0').length;
      tmp = tmp.filter((e) => e != '0');
    }
    cntToBinary++;
    s = tmp.length.toString(2); // 2진수로 변환
  }
  return [cntToBinary, cntZero];
};

// let r = solution('110010101001');
// console.log(r);
