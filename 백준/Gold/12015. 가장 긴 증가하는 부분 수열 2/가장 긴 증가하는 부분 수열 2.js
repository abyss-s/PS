const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = [0];
for (let i = 0; i < N; i++) {
  if (dp[dp.length - 1] < arr[i]) dp.push(arr[i]);
  else {
    let left = 0;
    let right = dp.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (dp[mid] < arr[i]) left = mid + 1;
      else right = mid;
    }
    dp[right] = arr[i];
  }
}
console.log(dp.length - 1);
