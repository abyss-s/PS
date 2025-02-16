const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
// const filePath =
//   process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 10250번 ACM 호텔
const t = Number(input[0]);
for (let i = 0; i < t; i++) {
  const [h, w, n] = input[i + 1].split(' ').map(Number);
  let floor = n % h; // 층
  let room = Math.floor(n / h) + 1; // 호
  // 꼭대기 층 처리
  if (floor === 0) {
    floor = h;
    room--;
  }
  console.log(100 * floor + room);
}