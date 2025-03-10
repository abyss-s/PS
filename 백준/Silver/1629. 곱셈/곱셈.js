const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 1629번: 곱셈
const [a, b, c] = input[0].split(' ').map(BigInt);

// divide and conquer
const pow = (a, b, c) => {
  if (b === 0n) return 1n;
  const half = pow(a, b / 2n, c); // recur
  return b % 2n === 0n ? (half * half) % c : (half * half * (a % c)) % c;
};

console.log(pow(a, b, c).toString());
