const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const t = +input[0];
const result = [];
for (let i = 1; i <= t; i++) {
  const [d, n, s, p] = input[i].split(' ').map(Number);
  const ser = n * s;
  const par = d + n * p;
  if (ser < par) {
    result.push('do not parallelize');
  } else if (par < ser) {
    result.push('parallelize');
  } else {
    result.push('does not matter');
  }
}

console.log(result.join('\n'));
