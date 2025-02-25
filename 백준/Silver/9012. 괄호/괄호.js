const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input.slice(1);

for (const line of arr) {
  let stk = [];
  let isValid = true;

  for (const ch of line) {
    if (ch === '(') {
      stk.push(ch);
    } else {
      if (stk.length === 0) {
        isValid = false;
        break;
      } else {
        stk.pop();
      }
    }
  }
  if (stk.length > 0) isValid = false;
  console.log(isValid ? 'YES' : 'NO');
}