const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [v, e] = input[0].split(' ').map((i) => +i);
const treeInfo = input.slice(1).map((li) => li.split(' ')); // a와 b가 가중치 c로 연결되어 있다
const mst = {};

for (let i = 0; i < e; i++) {
  const [a, b, c] = treeInfo[i].map((v) => +v);
  if (mst[a]) mst[a].push([b, c]);
  else mst[a] = [[b, c]];
  if (mst[b]) mst[b].push([a, c]);
  else mst[b] = [[a, c]];
  if (mst[c]) mst[c].push([a, b]);
  else mst[c] = [[a, b]];
}

// 크루스칼 알고리즘
const kruskal = (mst) => {
  const parent = Array.from({ length: v + 1 }, (_, i) => i);
  const make = () => {
    for (let i = 1; i <= v; i++) {
      parent[i] = i;
    }
  };
  const find = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  };
  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootY] = rootX;
    }
  };
  const edges = [];
  for (const [a, b, c] of treeInfo) {
    edges.push([a, b, c]);
  }
  make();
  edges.sort((a, b) => a[2] - b[2]);
  let result = 0;
  for (const [a, b, c] of edges) {
    if (find(a) !== find(b)) {
      union(a, b);
      result += +c;
    }
  }
  return result;
};

//console.log(mst);
kruskal(mst);
console.log(kruskal(mst));