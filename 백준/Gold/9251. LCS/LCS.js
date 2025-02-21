const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input;
let len = 0;
let n = a.length;
let m = b.length;
let dp = Array(n + 1)
  .fill(0)
  .map(() => Array(m + 1).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i == 0 || j == 0) {
      dp[i][j] = 0;
    }
    if (a[i] === b[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
    } else {
      dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
    len = Math.max(len, dp[i + 1][j + 1]);
  }
}

console.log(len);