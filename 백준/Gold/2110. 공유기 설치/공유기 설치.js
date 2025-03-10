const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 2110번: 공유기 설치
const [N, C] = input[0].split(' ').map((i) => +i);
const wifis = input
  .slice(1)
  .map((i) => +i)
  .sort((a, b) => a - b);

let low = 1; // 최소 거리
let high = wifis[N - 1] - wifis[0]; // 최대 거리
let temp = -1;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let cnt = 1;
  let start = wifis[0];
  for (let i = 1; i < N; i++) {
    // 이분탐색: 중간 값 기준으로 보다 커야 함
    if (wifis[i] - start >= mid) {
      cnt++;
      start = wifis[i];
    }
  }
  if (cnt >= C) { // 범위 줄이기
    temp = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(temp);
