const fs = require('fs');

// 백준 제출용
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 1002번: 터렛
const t = +input[0];
const inputArr = input.slice(1).map((line) => line.split(' ').map((i) => +i));
results = [];
let count = Infinity;

// 거리 계산 함수
const calcDist = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

// 테스트케이스별 류재명이 있을 수 있는 개수
for (let i = 0; i < t; i++) {
  let [x1, y1, r1, x2, y2, r2] = inputArr[i];
  const dist = calcDist(x1, y1, x2, y2);
  if (dist == 0 && r1 == r2) results.push(-1);
  else if (dist == r1 + r2 || dist == Math.abs(r2 - r1)) results.push(1);
  else if (dist < r1 + r2 && dist > Math.abs(r2 - r1)) results.push(2);
  else results.push(0);
}

console.log(results.join('\n'));
