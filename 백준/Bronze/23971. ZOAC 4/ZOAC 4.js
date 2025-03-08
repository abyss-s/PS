const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [H, W, N, M] = input[0].split(' ').map((i) => +i);
const row = Math.ceil(H / (N + 1));
const col = Math.ceil(W / (M + 1));
console.log(row * col);
