const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



// 백준 1260번: dfs와 bfs
const [n, m, v] = input[0].split(' ').map((i) => +i);
const graphInfo = input.slice(1).map((v) => v.split(' ').map(Number));
const dfsResult = [];
const bfsResult = [];

// 인접 리스트 생성 및 초기화
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const [a, b] = graphInfo[i];
  graph[a].push(b);
  graph[b].push(a);
}

// 오름차순 정렬
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

// DFS 함수
const visited = Array(n + 1).fill(false);
const dfs = (startNode) => {
  visited[startNode] = true;
  dfsResult.push(startNode);

  for (const node of graph[startNode]) {
    if (!visited[node]) {
      visited[node] = true;
      dfs(node);
    }
  }
};

// BFS 함수
const bfs = (startNode) => {
  const visited = Array(n + 1).fill(false);
  const q = [startNode];
  visited[startNode] = true;

  while (q.length > 0) {
    const cur = q.shift();
    bfsResult.push(cur);

    for (const node of graph[cur]) {
      if (!visited[node]) {
        visited[node] = true;
        q.push(node);
      }
    }
  }
};

// v부터 방문
dfs(v); // DFS 호출
bfs(v); // BFS 호출

// 출력
console.log(dfsResult.join(' ')); // DFS 결과
console.log(bfsResult.join(' ')); // BFS 결과