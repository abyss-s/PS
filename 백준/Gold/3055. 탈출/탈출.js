const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [r, c] = input[0].split(' ').map((i) => +i);
const map = input.slice(1).map((i) => i.split(''));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let waterQueue = [];
let hedgehogQueue = [];
let visited = Array.from({ length: r }, () => Array(c).fill(false));
let time = 0;

// 초기 위치 설정
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (map[i][j] === '*') {
      waterQueue.push([i, j]);
    }
    if (map[i][j] === 'S') {
      hedgehogQueue.push([i, j]);
      visited[i][j] = true;
    }
  }
}

const bfs = () => {
  while (hedgehogQueue.length) {
    // 물 이동
    let wCount = waterQueue.length;
    for (let w = 0; w < wCount; w++) {
      const [x, y] = waterQueue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (
          nx < 0 ||
          nx >= r ||
          ny < 0 ||
          ny >= c ||
          map[nx][ny] === 'X' ||
          map[nx][ny] === 'D'
        )
          continue;
        if (map[nx][ny] === '.') {
          map[nx][ny] = '*';
          waterQueue.push([nx, ny]);
        }
      }
    }

    // 고슴도치 이동
    let hCount = hedgehogQueue.length;
    if (hCount === 0) return 'KAKTUS'; // 안전하게 이동할 수 없는 경우

    for (let h = 0; h < hCount; h++) {
      const [x, y] = hedgehogQueue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (
          nx < 0 ||
          nx >= r ||
          ny < 0 ||
          ny >= c ||
          map[nx][ny] === 'X' ||
          map[nx][ny] === '*' ||
          visited[nx][ny]
        )
          continue;
        if (map[nx][ny] === 'D') return time + 1; // 비버굴 도착
        visited[nx][ny] = true;
        hedgehogQueue.push([nx, ny]);
      }
    }

    time++;
  }

  return 'KAKTUS';
};

console.log(bfs());