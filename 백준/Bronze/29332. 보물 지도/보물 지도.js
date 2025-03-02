const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const map = input.slice(1).map((line) => line.split(' '));
let minX = -1e9;
let maxX = 1e9;
let minY = -1e9;
let maxY = 1e9;

for (let m of map) {
  let [xi, yi, di] = m;
  let x = +xi;
  let y = +yi;

  if (di === 'L') {
    maxX = Math.min(maxX, x - 1);
  } else if (di === 'R') {
    minX = Math.max(minX, x + 1);
  } else if (di === 'U') {
    minY = Math.max(minY, y + 1);
  } else if (di === 'D') {
    maxY = Math.min(maxY, y - 1);
  }
}

if (minX == -1e9 || minY == -1e9 || maxX == 1e9 || maxY == 1e9) {
  console.log('Infinity');
  return;
}

let width = maxX - minX + 1;
let height = maxY - minY + 1;
width <= 0 || height <= 0 ? console.log('Infinity') : console.log((BigInt(width) * BigInt(height)).toString());