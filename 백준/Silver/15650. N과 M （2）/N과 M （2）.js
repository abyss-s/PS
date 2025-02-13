const fs = require('fs');
// 백준 제출용
// const input = fs.readFileSync(0).toString().trim().split(' ');

// 로컬 테스트용
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let n = Number(input[0]);
let m = Number(input[1]);

let results = [];

// 조합을 위한 재귀 함수
const recur = (start, depth) => {
  // 기저 조건
  if (depth === m) {
    console.log(results.join(' '));
    return;
  }

  for (let i = start; i <= n; i++) {
    results[depth] = i;
    recur(i + 1, depth + 1); // 다음 숫자로 이동
  }
};

recur(1, 0); // 자연수 1부터 호출