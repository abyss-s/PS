const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const filePath =
//   process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
for (let i = 0; i < n; i++) {
  let str = '';
  if (i % 2 === 0) {
    for (let j = 0; j < n; j++) {
      str += '* ';
    }
  } else {
    for (let j = 0; j < n; j++) {
      str += ' *';
    }
  }
  console.log(str);
}