const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
let cnt = 1;
for (let i = 1; i <= n; i++) {
  if (n <= cnt) {
    console.log(i);
    return;
  }
  cnt += 6 * i;
}