const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
//const filePath =
//  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
//const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 2606번: 바이러스

const n = Number(input[0]); // 컴퓨터의 수
const m = Number(input[1]); // 연결된 컴퓨터 쌍의 수
const graphInfo = input.slice(2).map((v) => v.split(' ').map(Number));

const graph = Array(n + 1)
  .fill(0)
  .map(() => Array(n + 1).fill(0));

// 인접 행렬 정보 저장
for (let i = 0; i < m; i++) {
  const [a, b] = graphInfo[i];
  graph[a][b] = 1;
  graph[b][a] = 1;
}

let count = 0; // 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수

const bfs = (startNode) => {
  let q = [startNode]; // 큐 초기화 (push[0])
  let visited = Array(n + 1).fill(false);
  visited[startNode] = true;

  while (q.length > 0) {
    const cur = q.shift(); // 팝

    for (let i = 1; i <= n; i++) {
      if (graph[cur][i] === 1 && !visited[i]) {
        // 양쪽 방문처리
        visited[i] = true;
        q.push(i);
        count++;
      }
    }
  }
};

bfs(1); // 1번 컴퓨터에서 탐색 시작
console.log(count);