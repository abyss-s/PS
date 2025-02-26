const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [c, k, p] = input[0].split(' ').map(Number);
let res = 0;
for (let i = 1; i <= c; i++) {
  res += k * i + p * Math.pow(i, 2);
}
console.log(res);