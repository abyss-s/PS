const fs = require('fs');

// 백준 제출용
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 로컬 테스트용
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 15652번: N과 M (4)
const [N, M] = input[0].split(' ').map(Number);

const results = [];
const comb = [];

const dfs = (depth, start) => {
  if (depth === M) {
    results.push(comb.slice());
    return;
  }
  for (let i = start; i <= N; i++) {
    comb.push(i);
    dfs(depth + 1, i);
    comb.pop();
  }
};

dfs(0, 1);

results.forEach((result) => {
  console.log(result.join(' '));
});
