function solution(intStrs, k, s, l) {
  let arr = [];
  for (let num of intStrs) {
    let sub = Number(num.slice(s, s + l));
    if (sub > k) arr.push(sub);
  }
  return arr;
}
