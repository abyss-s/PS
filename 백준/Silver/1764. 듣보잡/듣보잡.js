const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1764번 듣보잡
const [n, m] = input[0].split(' ').map(Number);
const notListen = new Set(); // 듣도 못한 사람
const notSee = new Set(); // 보도 못한 사람
let results = [];

for (let i = 1; i <= n; i++) notListen.add(input[i]);
for (let i = n + 1; i <= n + m + 1; i++) notSee.add(input[i]);

for (let ppl of notListen) {
  if (notSee.has(ppl)) {
    results.push(ppl);
  }
}

results.sort((a, b) => a.localeCompare(b));
console.log(results.length);
console.log(results.join('\n'));