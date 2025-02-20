const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


// 백준 11724번: 연결 요소의 개수
const [n, m] = input[0].split(' ').map(Number);
const graph = Array(n + 1)
  .fill(0)
  .map(() => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

let count = 0;
const visited = Array(n + 1).fill(false);

const bfs = (start) => {
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    for (let i = 0; i < graph[node].length; i++) {
      const nextNode = graph[node][i];
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }
};

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    bfs(i);
    count++;
  }
}
console.log(count);