const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input.slice(1).map((i) => i.split(' '));
arr.sort((a, b) => {
  if (+b[1] === +a[1]) {
    return a[0] > b[0] ? 1 : -1;
  }
  return +b[1] - +a[1];
});

console.log(arr[0][0]);