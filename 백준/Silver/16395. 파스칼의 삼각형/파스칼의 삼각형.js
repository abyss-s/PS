const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const dp = Array.from({ length: n }, () => new Array(k).fill(0));
for (let i = 0; i < n; i++) {
  dp[i][0] = 1;
}
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= Math.min(i, k - 1); j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}
console.log(dp[n - 1][k - 1]);
