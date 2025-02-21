const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const colors = input.slice(1).map((v) => v.split(' ').map((i) => +i));

const dp = Array.from({ length: n }, () => Array(3).fill(0));

dp[0] = colors[0];

for (let i = 1; i < n; i++) {
  // i번째 집을 각각 빨강, 초록, 파랑으로 칠했을 때 최소 비용
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + colors[i][0]; // red: green, blue 중 작은 값 + red
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + colors[i][1]; // green: red, blue 중 작은 값 + green
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + colors[i][2]; // blue: red, green 중 작은 값 + blue
}
console.log(Math.min(...dp[n - 1]));