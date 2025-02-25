const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, k] = input[0].split(' ').map((i) => +i);
const friendCost = input[1].split(' ').map((i) => +i); // 친구비 입력
const friendRelation = input // 친구 관계 [v, w] 입력
  .slice(2)
  .map((real) => real.split(' ').map((i) => +i));
const parent = Array.from({ length: n + 1 }, (_, i) => i);

// union-find
const make = () => {
  for (let i = 1; i <= n; i++) {
    parent[i] = i;
  }
};
const find = (a) => {
  if (parent[a] === a) return a;
  return (parent[a] = find(parent[a]));
};
const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA !== rootB) {
    parent[rootB] = rootA;
    return true;
  }
  return false;
};

make();
for (let i = 0; i < m; i++) {
  const [v, w] = friendRelation[i];
  union(v, w);
}

const cost = Array.from({ length: n + 1 }, () => 1e9); // 학생 별 최소 친구비
let minCost = 0;
for (let i = 1; i <= n; i++) {
  const root = find(i);
  cost[root] = Math.min(cost[root], friendCost[i - 1]);
}

for (const c of cost) {
  if (c !== 1e9) {
    minCost += c;
  }
}
console.log(minCost <= k ? minCost : 'Oh no');