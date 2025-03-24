const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [k, s, n] = input[0].split(' ');
const moves = parseInt(n);
let [kx, ky] = [k.charCodeAt(0) - 65, 8 - parseInt(k[1])];
let [sx, sy] = [s.charCodeAt(0) - 65, 8 - parseInt(s[1])];

const directions = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, 1],
  T: [0, -1],
  RT: [1, -1],
  LT: [-1, -1],
  RB: [1, 1],
  LB: [-1, 1],
};

for (let i = 1; i <= moves; i++) {
  const move = input[i];
  const [dx, dy] = directions[move];
  let nkx = kx + dx;
  let nky = ky + dy;

  if (nkx < 0 || nkx >= 8 || nky < 0 || nky >= 8) continue;

  if (nkx === sx && nky === sy) {
    let nsx = sx + dx;
    let nsy = sy + dy;

    if (nsx < 0 || nsx >= 8 || nsy < 0 || nsy >= 8) continue;

    sx = nsx;
    sy = nsy;
  }
  kx = nkx;
  ky = nky;
}

let king = String.fromCharCode(kx + 65) + (8 - ky);
let stone = String.fromCharCode(sx + 65) + (8 - sy);
console.log(king);
console.log(stone);
