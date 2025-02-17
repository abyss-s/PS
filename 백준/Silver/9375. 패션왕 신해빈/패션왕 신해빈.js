const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 9375번 패션왕 신해빈
const tc = Number(input[0]);

let idx = 1;
for (let i = 0; i < tc; i++) {
  const n = Number(input[idx++]);
  const clothes = new Map(); // 의상의 종류를 key로, 의상의 개수를 value로 저장

  for (let j = 0; j < n; j++) {
    const [name, type] = input[idx++].split(' ');
    // 해당 종류의 의상이 이미 있으면 개수 1 더하고
    if (clothes.has(type)) {
      clothes.set(type, clothes.get(type) + 1);
    }
    // 없으면 종류 추가 후 1로 초기화
    else {
      clothes.set(type, 1);
    }
  }

  let result = 1; // 조합의 총 개수
  clothes.forEach((value) => {
    result *= value + 1;
  });

  result -= 1; // 알몸이 아닌 상태를 제외

  console.log(result);
}