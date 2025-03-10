const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 15654번: N과 M (5)
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const results = [];
const combs = [];
const visited = Array.from({ length: n }, () => false);

const dfs = (depth) => {
  if (depth == m) {
    results.push([...combs]);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    combs.push(arr[i]);
    dfs(depth + 1);
    combs.pop();
    visited[i] = false;
  }
};

dfs(0, 0);

results.forEach((comb) => {
  console.log(comb.join(' '));
});
