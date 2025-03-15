const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

const major = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const enharmonic = {
  'B#': 'C',
  'E#': 'F',
  Bb: 'A#',
  Db: 'C#',
  Eb: 'D#',
  Gb: 'F#',
  Ab: 'G#',
};

let index = 0;

while (index < input.length) {
  let line = input[index].trim();
  if (line === '***') break;

  const notes = line.split(' ');
  index++;
  let h = parseInt(input[index].trim(), 10);
  index++;

  let result = [];

  for (let note of notes) {
    // 이명동음 변환
    if (enharmonic[note]) {
      note = enharmonic[note];
    }

    const noteIndex = major.indexOf(note);
    if (noteIndex < 0) {
      continue;
    }
    const newIndex = (noteIndex + h + 12) % 12;
    result.push(major[newIndex]);
  }

  console.log(result.join(' '));
}
