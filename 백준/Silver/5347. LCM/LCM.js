const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 5347번: LCM
const n = +input.shift();
let results = [];

const gcd = (a, b) => {
  if (b == 0) return a;
  return gcd(b, a % b);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

for (let i = 0; i < n; i++) {
  let [a, b] = input[i].split(' ').map((i) => +i);
  results.push(lcm(a, b));
}

console.log(results.join('\n'));
