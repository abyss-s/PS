const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 백준 2630번: 색종이 만들기
const n = Number(input[0]);
const arr2d = input.slice(1).map((line) => line.split(' ').map(Number));

let white = 0;
let blue = 0;

// 현재 색종이 영역이 모두 같은 색으로 이뤄져 있는지 확인
const isUniform = (arr2d, x, y, size) => {
  const color = arr2d[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr2d[i][j] !== color) return false;
    }
  }
  return true;
};

// 분할 정복 재귀 함수
const recur = (x, y, size) => {
  const paper = arr2d[x][y];

  // isUniform으로 검사 진행
  if (isUniform(arr2d, x, y, size)) {
    if (paper === 1) blue++;
    else white++;
    return;
  }
  // 모두 같은 색이 아니면 될 때까지 분할
  else {
    const half = size / 2;
    recur(x, y, half); // 1
    recur(x, y + half, half); // 2
    recur(x + half, y, half); // 3
    recur(x + half, y + half, half); // 4
  }
};

recur(0, 0, n);
console.log(white);
console.log(blue);