function solution(my_string, queries) {
  let arr = my_string.split("");

  // 쿼리 s-e만큼 반복
  for (let [s, e] of queries) {
    // s-e만큼 자르고 뒤집기
    let sub = arr.slice(s, e + 1).reverse();

    // 원래 배열에 s+i부터 다시 삽입
    for (let i = 0; i < sub.length; i++) {
      arr[s + i] = sub[i];
    }
  }

  return arr.join("");
}