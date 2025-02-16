const { Hash } = require('crypto');
const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 17219번 비밀번호 찾기
const [n, m] = input[0].split(' ').map(Number);
const myInfo = {};
for (let i = 1; i <= n; i++) {
  let [site, password] = input[i].split(' ');
  myInfo[site] = password;
}
for (let i = 1; i <= m; i++) {
  let site = input[i + n];
  console.log(myInfo[site]);
}