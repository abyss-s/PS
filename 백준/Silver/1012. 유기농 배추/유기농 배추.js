const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');
const T = Number(input[0]);
const testCases = input.slice(1);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let idx = 0;
for (let i = 0; i < T; i++) {
  const [M, N, K] = testCases[idx++].split(' ').map(Number);
  const map = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  let result = 0;

  for (let j = 0; j < K; j++) {
    const [x, y] = testCases[idx++].split(' ').map(Number);
    map[y][x] = 1; // 순서가 m부터
  }

  const bfs = (x, y) => {
    const q = [[x, y]];
    visited[x][y] = true;

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny] || map[nx][ny] === 0) continue;

        q.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
        result++;
      }
    }
  }

  console.log(result);
}