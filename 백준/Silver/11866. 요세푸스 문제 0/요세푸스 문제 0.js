const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
// const filePath =
//   process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 11866번 요세푸스 문제 0
const [n, k] = input[0].split(' ').map(Number);
let arr = Array.from({ length: n }, (v, i) => i + 1);
let result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < k; j++) {
    if (j === k - 1) {
      result.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
  }
}

console.log('<' + result.join(', ') + '>');