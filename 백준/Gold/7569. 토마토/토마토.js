const fs = require('fs');

// 백준 제출용
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 7576번: 토마토
const [m, n, h] = input[0].split(' ').map(Number);
// const tomatoes = input.slice(1).map((row) => row.split(' ').map(Number));
const tomatoes = Array.from({ length: h }, () => Array.from({ length: n }, () => Array(m).fill(0)));

for (let k = 0; k < h; k++) {
  for (let i = 0; i < n; i++) {
    // 높이, 행 => k * n + i
    tomatoes[k][i] = input[1 + k * n + i].split(' ').map(Number);
  }
}
// console.log(tomatoes);

let q = [];
const dx = [0, 0, 1, -1, 0, 0];
const dy = [0, 0, 0, 0, 1, -1];
const dz = [1, -1, 0, 0, 0, 0];
let day = 0;

// 초기 익은 토마토의 위치를 큐에 넣기
for (let k = 0; k < h; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (tomatoes[k][i][j] === 1) {
        q.push([k, i, j]);
      }
    }
  }
}

let front = 0;

while (front < q.length) {
  const size = q.length - front; // 현재 day에 익힐 수 있는 토마토 개수

  for (let i = 0; i < size; i++) {
    const [z, x, y] = q[front++];

    for (let j = 0; j < 6; j++) {
      const nz = z + dz[j];
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nz < 0 || nz >= h || nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (tomatoes[nz][nx][ny] !== 0) continue;

      // 익은 토마토로 변환
      tomatoes[nz][nx][ny] = 1;
      q.push([nz, nx, ny]);
    }
  }
  day++;
}

// 모든 토마토가 익었는지 확인
for (let k = 0; k < h; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (tomatoes[k][i][j] === 0) {
        console.log(-1);
        return;
      }
    }
  }
}

console.log(day - 1);