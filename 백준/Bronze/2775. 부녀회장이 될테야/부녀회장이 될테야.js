const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const tc = +input[0];
for (let i = 1; i <= tc; i++) {
  const [k, n] = [+input[i * 2 - 1], +input[i * 2]];
  const dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  console.log(dp[k][n]);
}