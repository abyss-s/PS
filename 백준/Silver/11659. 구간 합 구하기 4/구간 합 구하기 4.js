const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
// const filePath =
//   process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 11659번: 구간 합 구하기 4
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map((i) => +i);
const lines = input.slice(2);

const prefixSum = Array(n + 1).fill(0); // 구간합 배열
prefixSum[0] = arr[0];
for (let start = 1; start < n; start++) {
  prefixSum[start] = prefixSum[start - 1] + arr[start];
}

lines.forEach((line) => {
  const [i, j] = line.split(' ').map((v) => +v);

  // 단일 구간
  if (i === 1) {
    console.log(prefixSum[j - 1]);
  }
  // 여러 구간: prefixSum[j-1] - prefixSum[i-2]
  else {
    console.log(prefixSum[j - 1] - prefixSum[i - 2]);
  }
});