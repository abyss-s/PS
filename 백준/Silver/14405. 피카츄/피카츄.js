const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const str = input[0];
const pkc = ['pi', 'ka', 'chu'];
let idx = 0;

while (idx < str.length) {
  let matched = false;
  for (let s of pkc) {
    if (str.startsWith(s, idx)) {
      idx += s.length;
      matched = true;
      break;
    }
  }
  if (!matched) {
    break;
  }
}

console.log(idx === str.length ? 'YES' : 'NO');