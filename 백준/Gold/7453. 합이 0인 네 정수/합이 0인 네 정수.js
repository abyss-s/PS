const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 백준 7453번: 합이 0인 네 정수
const n = +input[0];
const A = [];
const B = [];
const C = [];
const D = [];

for (let i = 1; i <= n; i++) {
  const [a, b, c, d] = input[i].split(' ').map(Number);
  A.push(a);
  B.push(b);
  C.push(c);
  D.push(d);
}

const map = new Map(); // 해시맵
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const sum = A[i] + B[j];
    map.set(sum, (map.get(sum) || 0) + 1);
  }
}
let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const target = -(C[i] + D[j]);
    if (map.has(target)) {
      cnt += map.get(target);
    }
  }
}
console.log(cnt);