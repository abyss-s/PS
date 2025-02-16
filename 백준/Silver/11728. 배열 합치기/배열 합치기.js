const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
// const filePath =
//   process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 11728번 배열 합치기
const [n, m] = input.shift().split(' ').map(Number);
const arrA = input[0].split(' ').map(Number);
const arrB = input[1].split(' ').map(Number);

console.log(
  arrA
    .concat(arrB)
    .sort((a, b) => a - b)
    .join(' ')
);