function solution(l, r) {
  var answer = [];
  for (var i = l; i <= r; i++) {
    if (/^[05]+$/.test(i.toString())) answer.push(i);
  }
  return answer.length > 0 ? answer : [-1];
}