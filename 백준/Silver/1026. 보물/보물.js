const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

const sortedA = a.sort((a, b) => a - b); // 오름차순
const sortedB = b.sort((a, b) => b - a); // 내림차순

let s = 0;

for (let i = 0; i < n; i++) {
  s += sortedA[i] * sortedB[i];
}

console.log(s);