const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let map = input.slice(1).map((row) => row.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let year = 1;

const bfs = (x, y, visited) => {
  const queue = [[x, y]];
  visited[x][y] = true;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny] || map[nx][ny] === 0) {
        continue;
      }
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};

while (true) {
  const melt = Array.from({ length: n }, () => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] > 0) {
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[nx][ny] === 0) {
            melt[i][j]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i][j] = Math.max(0, map[i][j] - melt[i][j]);
    }
  }

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] !== 0 && !visited[i][j]) {
        bfs(i, j, visited);
        cnt++;
      }
    }
  }

  if (cnt >= 2) {
    console.log(year);
    break;
  }
  year++;
  if (cnt === 0) {
    console.log(0);
    break;
  }
}