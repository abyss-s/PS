const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// // 로컬 테스트용
// const filePath =
//   process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 1427번: 소트인사이드
const str = input[0]
  .split('')
  .map((i) => +i)
  .sort((a, b) => b - a)
  .join('');
console.log(str);