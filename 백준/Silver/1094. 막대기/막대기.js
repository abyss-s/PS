const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const x = +input[0];
let arr = [64];
let count = 0;
let sum = arr.reduce((a, c) => a + c, 0);

for (let i = 0; i < 7; i++) {
  if (x & (1 << i)) count++;
}

console.log(count);