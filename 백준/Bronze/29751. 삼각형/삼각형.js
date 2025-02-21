const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const filePath =
//   process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 29751번 삼각형
const [w, h] = input[0].split(' ').map(Number);
console.log(((w * h) / 2).toFixed(1));