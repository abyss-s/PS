const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, L] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

let cnt = 0;
let tmp = -1;
for (let i = 0; i < N; i++) {
  if (arr[i] > tmp) {
    cnt++;
    tmp = arr[i] + L - 1;
  }
}

console.log(cnt);