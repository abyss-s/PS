const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const MAX = 10000000;

if (n >= MAX) {
  console.log(1003001);
  return;
}

// 에라토스테네의 체
const isPrime = new Array(MAX + 1).fill(true);
isPrime[0] = isPrime[1] = false;
for (let i = 2; i * i <= MAX; i++) {
  if (isPrime[i]) {
    // i의 배수들을 false로 변경
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

const isPalin = (n) => {
  const str = n + '';
  return str === str.split('').reverse().join('');
};

for (let i = n; i <= MAX; i++) {
  if (isPrime[i] && isPalin(i)) {
    console.log(i);
    break;
  }
}