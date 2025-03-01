const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];
const testCases = input.slice(1);

testCases.forEach((line) => {
  const [a, b] = line.split(' ');
  let results = [];
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    const curA = i >= 0 ? a[i] - '0' : 0;
    const curB = j >= 0 ? b[j] - '0' : 0;

    const sum = curA + curB + carry;
    results.push(sum % 2);
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  // 0 제거
  while (results.length > 1 && results[results.length - 1] === 0) {
    results.pop();
  }

  console.log(results.reverse().join(''));
});