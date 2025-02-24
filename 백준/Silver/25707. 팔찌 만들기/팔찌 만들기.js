const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map((i) => +i);
console.log(Math.abs(Math.max(...arr) - Math.min(...arr)) * 2);