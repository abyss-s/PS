function solution(s) {
  var dict = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  let res = '';
  let tmp = '';

  for (let char of s) {
    if (!isNaN(char)) {
      res += char;
    } else {
      tmp += char;
      // temp가 dict에 있는 경우, 해당하는 숫자를 res에 추가
      if (dict[tmp]) {
        res += dict[tmp];
        tmp = '';
      }
    }
  }

  return Number(res);
}
