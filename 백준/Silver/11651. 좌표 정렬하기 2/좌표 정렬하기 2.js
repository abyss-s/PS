const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((line) => line.split(' ').map((i) => +i));
arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
arr.forEach((line) => {
  console.log(line.join(' '));
});