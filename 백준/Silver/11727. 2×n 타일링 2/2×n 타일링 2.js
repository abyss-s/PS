const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 11727번 2xn 타일링 2
const n = Number(input[0]);
const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;
// dp[3] = 5;
// dp[4] = 13;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n]);