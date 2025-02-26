const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [ab, cd] = input.map((v) => v.split(' ').map(Number));
const [a, b] = ab;
const [c, d] = cd;
const arr = [a / c + b / d, c / d + a / b, d / b + c / a, b / a + d / c];
console.log(arr.indexOf(Math.max(...arr)));