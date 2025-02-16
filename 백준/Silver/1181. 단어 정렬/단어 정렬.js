const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1181번 단어 정렬
const n = Number(input[0]);
const words = input.slice(1);
let newWords = [...new Set(words)];
newWords.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  } else {
    return a.length - b.length;
  }
});
console.log(newWords.join('\n'));