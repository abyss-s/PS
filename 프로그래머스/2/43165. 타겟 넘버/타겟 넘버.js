function solution(numbers, target) {
  function dfs(index, sum) {
    // 다 돌았을 때 합이 target과 같으면 1, 아니면 0을 반환
    if (index === numbers.length) {
      return sum === target ? 1 : 0;
    }
    
    const plus = dfs(index + 1, sum + numbers[index]);
    const minus = dfs(index + 1, sum - numbers[index]);

    return plus + minus;
  }

  return dfs(0, 0);
}