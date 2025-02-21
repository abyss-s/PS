const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((i) => +i);
const map = input.slice(1).map((line) => line.split(' ').map((i) => +i));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let cnt = 0;
let max = 0;
const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = true;
  let size = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (map[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        size++;
      }
    }
  }
  max = Math.max(max, size);
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      bfs(i, j);
      cnt++;
    }
  }
}

console.log(cnt);
console.log(max);