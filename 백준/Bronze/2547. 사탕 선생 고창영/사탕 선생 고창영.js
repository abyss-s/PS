const fs = require('fs');

// 백준
const input = fs
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .filter((line) => line !== '');

// 로컬
// const filePath =
//   process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .filter((line) => line !== '');

// 백준 2547번: 사탕 선생 고창영
let line = 0;
let t = Number(input[line++]);

for (let i = 0; i < t; i++) {
  if (line >= input.length) break;
  const n = Number(input[line++]);
  let total = 0n;
  let cnt = 0;

  for (let j = 0; j < n; j++) {
    if (line >= input.length) break;
    total += BigInt(input[line++]);
    cnt++;
  }

  if (cnt > 0 && total % BigInt(cnt) === 0n) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}