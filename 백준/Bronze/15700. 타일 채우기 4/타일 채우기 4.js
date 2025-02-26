const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(BigInt);
console.log(((n * m) / 2n).toString()); // BigInt를 문자열로 변환하기