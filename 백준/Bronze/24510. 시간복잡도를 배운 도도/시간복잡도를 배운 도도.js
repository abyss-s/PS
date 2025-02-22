const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const lines = input.slice(1);
let maxCount = 0;
lines.forEach((line) => {
  let count = 0;
  if (line.includes('for')) count += line.match(/for/g).length;
  if (line.includes('while')) count += line.match(/while/g).length;
  maxCount = Math.max(maxCount, count);
});

console.log(maxCount);