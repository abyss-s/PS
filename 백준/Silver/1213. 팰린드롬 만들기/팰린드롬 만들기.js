const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const arr = new Array(26).fill(0);
for (const ch of input) {
  arr[ch.charCodeAt(0) - 65]++;
}

let oddChar = '';
let oddCount = 0;
let left = '';
let right = '';

for (let i = 0; i < 26; i++) {
  if (arr[i] % 2 === 1) {
    oddCount++;
    oddChar = String.fromCharCode(i + 65);
  }
}

let result = '';
if (oddCount > 1) {
  result = "I'm Sorry Hansoo";
} else {
  // 짝수 개수 문자는 절반을 나눠서 양쪽에 배치
  for (let i = 0; i < 26; i++) {
    let ch = String.fromCharCode(i + 65);
    let cnt = arr[i];
    if (cnt % 2 === 0) {
      left += ch.repeat(cnt / 2);
    }
    if (cnt % 2 === 1) {
      left += ch.repeat((cnt - 1) / 2);
    }
  }

  right = left.split('').reverse().join('');
  result = left + oddChar + right;
}

console.log(result);