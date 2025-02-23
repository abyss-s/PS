const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

// 백준 2108번 통계학
const n = +input[0];
const arr = input.slice(1).map((i) => +i);
arr.sort((a, b) => a - b);

// 산술평균
let avg = (arr.reduce((a, c) => a + c, 0) / n).toFixed(0);
console.log(avg == '-0' ? 0 : avg);

// 중앙값
console.log(arr[Math.floor(n / 2)]);

// 최빈값
const map = new Map();
for (let i = 0; i < n; i++) {
  // 빈도수 저장
  const num = arr[i] + 4000;
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
}
const max = Math.max(...map.values());
const modes = []; // 최빈값 여러개 대비 저장할 배열
for (let [k, v] of map) {
  if (v === max) {
    modes.push(k);
  }
}
if (modes.length === 1) {
  console.log(modes[0] - 4000);
} else {
  modes.sort((a, b) => a - b);
  console.log(modes[1] - 4000);
}

// 범위
console.log(arr[arr.length - 1] - arr[0]);