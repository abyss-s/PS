const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 8595번 히든 넘버
const n = Number(input[0]);
const str = input[1];
let tmp = '';
let sum = 0;

for (let i = 0; i < n; i++) {
  if (str[i] >= '0' && str[i] <= '9') {
    tmp += str[i];
  } else {
    if (tmp.length > 0 && tmp.length <= 6) {
      sum += Number(tmp);
      tmp = '';
    }
  }
}

if (tmp.length > 0 && tmp.length <= 6) {
  sum += Number(tmp);
  tmp = '';
}

console.log(sum);