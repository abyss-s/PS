function solution(nums) {
  let set = new Set(nums);
  let len = nums.length / 2;
  // 중복비허용 조합 개수
  return Math.min(set.size, len);
}
