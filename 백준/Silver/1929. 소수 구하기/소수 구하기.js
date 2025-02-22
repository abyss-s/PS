const fs = require('fs');
input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n] = input[0].split(' ').map((i) => +i);
let primes = [];

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

for (let i = m; i <= n; i++) {
  if (isPrime(i)) primes.push(i);
}
for (const p of primes) {
  console.log(p);
}