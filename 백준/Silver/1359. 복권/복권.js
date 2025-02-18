const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 1359번: 복권 문제
let [n, m, k] = input[0].split(' ').map(Number);

// nCr(N choose K) 조합 계산
const combi = (n, r) => {
  if (n < r || r < 0) return 0;
  if (n === r || r === 0) return 1;

  let numerator = 1; // 분자
  let denominator = 1; // 분모

  for (let i = 0; i < r; i++) {
    numerator *= n - i;
    denominator *= i + 1;
  }
  return numerator / denominator;
};

// 전체 경우의 수 (리조트가 뽑음)
const total = combi(n, m);

// 서로 다른 수 k개 이상 일치하는 경우의 수 (지민이가 뽑음)
// 0 ~ k-1개가 서로 일치하는 경우의 수를 먼저 구함
let notSame = 0;
for (let i = 0; i < k; i++) {
  notSame += combi(m, i) * combi(n - m, m - i);
}

// 구해야 하는 명제로 변경 
const result = total - notSame;
const prob = result / total;
console.log(prob);