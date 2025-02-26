const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
let tc = 1;
for (let i = 0; i < N; i++) {
  const G = +input[tc++];
  const arr = [];
  for (let j = 0; j < G; j++) {
    arr.push(+input[tc++]);
  }
  let m = 1;
  while (true) {
    const remains = new Set();
    let isIt = true;
    for (let k = 0; k < G; k++) {
      const remain = arr[k] % m;
      if (remains.has(remain)) {
        isIt = false;
        break;
      }
      remains.add(remain);
    }
    if (isIt) {
      console.log(m);
      break;
    }
    m++;
  }
}