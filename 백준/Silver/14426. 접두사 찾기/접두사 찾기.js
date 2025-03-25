const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((i) => +i);
const s = input.slice(1, n + 1);
const t = input.slice(n + 1, n + m + 1);
let set = new Set();
let ans = 0;
for (let s1 of s) {
  for (let i = 1; i <= s1.length; i++) {
    set.add(s1.slice(0, i));
  }
}
for (let t1 of t) {
  if (set.has(t1)) {
    ans++;
  }
}
console.log(ans);
