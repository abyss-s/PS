const fs = require('fs');

// 백준 제출용
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
//const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
//const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 2644번: 촌수 계산
const n = Number(input[0]);
const [x, y] = input[1].split(' ').map(Number);
const m = Number(input[2]);
let graph = Array.from(Array(n + 1), () => []);
let visited = Array.from(Array(n + 1), () => false);
let count = -1;

for (let i = 3; i < 3 + m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const bfs = (x, target) => {
  let queue = [[x, 0]];
  visited[x] = true;

  while (queue.length > 0) {
    const [cur, depth] = queue.shift();

    if (cur === target) return depth;

    for (let p of graph[cur]) {
      if (!visited[p]) {
        visited[p] = true;
        queue.push([p, depth + 1]);
      }
    }
  }

  return -1;
};

console.log(bfs(x, y));
