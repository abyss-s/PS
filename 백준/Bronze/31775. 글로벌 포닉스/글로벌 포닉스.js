const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let prefix = [];
input.forEach((str) => {
  prefix.push(str[0]);
});
console.log(
  prefix.includes('l') && prefix.includes('k') && prefix.includes('p')
    ? 'GLOBAL'
    : 'PONIX'
);