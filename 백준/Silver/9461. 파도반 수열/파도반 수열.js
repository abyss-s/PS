const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 9461번 파도반 수열
const t = Number(input[0]);

let idx = 1;
for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  const dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    if (i < 4) dp[i] = 1;
    else if (i < 6) dp[i] = 2;
    else dp[i] = dp[i - 1] + dp[i - 5];
  }
  // for (let i = 11; i <= n; i++) {
  //   dp[i] = dp[i - 2] + dp[i - 3];
  // }
  console.log(dp[n]);
}