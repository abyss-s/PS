function solution(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  return arr.filter(x => x % k == 0);
}
