const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input);

let minVinyl = 5001;

for (let i = 0; i <= Math.floor(n / 5); i++) {
  const r = n - 5 * i;

  if (r % 3 === 0) {
    const rr = r / 3;
    minVinyl = Math.min(minVinyl, i + rr);
  }
}

console.log(minVinyl === 5001 ? -1 : minVinyl);