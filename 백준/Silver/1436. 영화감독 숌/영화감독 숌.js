const fs = require('fs');

// 백준 제출용
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 1436번: 영화감독 숌
const n = input[0];
let count = 0;
let num = 666;

while (count < n) {
  if (num.toString().includes('666')) count++;
  num++;
}

console.log(num - 1);
