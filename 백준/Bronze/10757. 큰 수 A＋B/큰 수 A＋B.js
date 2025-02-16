const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 10757번 큰 수 A+B
const [a, b] = input[0].split(' ').map(BigInt);
console.log((a + b).toString());