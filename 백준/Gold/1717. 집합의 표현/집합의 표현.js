const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 1717번: 집합의 표현
const [N, M] = input[0].split(' ').map(Number);
let parent = Array.from({ length: N + 1 }, (_, i) => i);

const find = (x) => {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x])); // 경로 압축
};

const union = (x, y) => {
  let a = find(x);
  let b = find(y);
  if (a !== b) {
    if (a < b) parent[b] = a;
    else parent[a] = b;
  }
};

for (let i = 1; i <= M; i++) {
  let [cmd, a, b] = input[i].split(' ').map(Number);
  if (cmd === 0) {
    union(a, b);
  } else {
    console.log(find(a) === find(b) ? 'YES' : 'NO');
  }
}
