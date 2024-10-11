// num이 소수면 true 리턴
function isPrime(num) {
  // 0과 1 제외
  if (num <= 1) return false;
  else {
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i == 0) return false;
  }
  return true;
}

// main 함수
function solution(nums) {
  var answer = 0; // -1이 아니라 0으로 초기화
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++; 
        }
      }
    }
  }
  return answer;
}
