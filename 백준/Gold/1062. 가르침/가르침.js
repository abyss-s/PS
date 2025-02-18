const fs = require('fs');

// 백준 제출용
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


// N: 단어 개수, K: 배울 수 있는 글자 수
const [N, K] = input[0].split(' ').map(Number);
const words = input.slice(1);

// 기본적으로 배워야 하는 알파벳
const defaults = new Set(['a', 'c', 'i', 'n', 't']);

// 배울 수 있는 글자가 5개 미만이면
if (K < 5) {
  console.log(0);
  process.exit(); // 프로그램 바로 종료
}

// 전체 알파벳 집합에서 기본 알파벳 제외
const alphabets = new Set('abcdefghijklmnopqrstuvwxyz');
defaults.forEach((ch) => alphabets.delete(ch));
const learnable = Array.from(alphabets);

// 각 단어를 비트마스크로 변환하여 저장
const wordMasks = words.map((word) => {
  let mask = 0;
  for (const ch of new Set(word)) {
    mask |= 1 << (ch.charCodeAt() - 'a'.charCodeAt());
  }
  return mask;
});

let answer = 0;

// 현재 배운 글자로 읽을 수 있는 단어 개수 계산
const readables = (mask) => {
  return wordMasks.reduce(
    (count, wordMask) => count + ((wordMask & mask) === wordMask ? 1 : 0),
    0
  );
};

// 백트래킹을 이용하여 k-5개의 추가 글자를 선택
const bt = (index, learned, count) => {
  if (count === K - 5) {
    answer = Math.max(answer, readables(learned));
    return;
  }

  for (let i = index; i < learnable.length; i++) {
    const ch = learnable[i];
    const newLearned = learned | (1 << (ch.charCodeAt() - 'a'.charCodeAt())); // 새로 배워야하는 글자
    bt(i + 1, newLearned, count + 1);
  }
};

// 기본 알파벳을 비트마스크로 변환하여 초기화
let initialMask = 0;
defaults.forEach(
  (ch) => (initialMask |= 1 << (ch.charCodeAt() - 'a'.charCodeAt()))
);

bt(0, initialMask, 0);

console.log(answer);