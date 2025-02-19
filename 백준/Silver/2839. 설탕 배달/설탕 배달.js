const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


// 백준 2839번 설탕 배달
const n = Number(input);

let minVinyl = Infinity;

for (let i = 0; i <= n; i++) {
  if (i * 5 > n) break;
  
  const r = n - 5 * i;

  if (r % 3 === 0) {
    const rr = r / 3;
    minVinyl = Math.min(minVinyl, i + rr);
  }
}

console.log(minVinyl === Infinity ? -1 : minVinyl);