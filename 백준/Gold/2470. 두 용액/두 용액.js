const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);
let left = 0;
let right = n - 1;
let minSum = Infinity;
let lIdx = left;
let rIdx = right;

while (left < right) {
  const sum = arr[left] + arr[right];

  if (Math.abs(sum) < Math.abs(minSum)) {
    minSum = sum;
    lIdx = left;
    rIdx = right;
  }

  if (sum < 0) left++;
  else if (sum > 0) right--;
  else break;
}

console.log(arr[lIdx], arr[rIdx]);