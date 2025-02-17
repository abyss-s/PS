const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 17626번 Four Squares
const n = Number(input[0]);
let dp = Array.from({ length: n + 1 }, (_, i) => i);

for (let i = 0; i < n; i++) {
  dp[i] = i;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[n]);