const fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 백준 5073번: 삼각형과 세 변
while (true) {
  let [a, b, c] = input.shift().split(' ').map(Number);
  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  if (a + b <= c || b + c <= a || c + a <= b) {
    console.log('Invalid');
  } else if (a === b && b === c && c === a) {
    console.log('Equilateral');
  } else if (a === b || b === c || c === a) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }
}