#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
  // 실행 시간 줄이기
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  // 숫자 i를 1로 만드는데 필요한 최소 연산횟수를 저장하는 테이블 선언 및 초기화
  vector<int> dp(n + 1, 0);

  // 첫번째는 연산 필요 없으므로 0으로 설정
  dp[1] = 0;

  for (int i = 2; i <= n; i++) {
    // 1부터 빼고나서 생각
    dp[i] = dp[i - 1] + 1;

    // 2로 나누고 최솟값  비교하여 더 적은 것을 선택
    if (i % 2 == 0) {
      dp[i] = min(dp[i], dp[i / 2] + 1);
    }

    // 3으로 나누고 최솟값 비교하여 더 적은 것을 선택
    if (i % 3 == 0) {
      dp[i] = min(dp[i], dp[i / 3] + 1);
    }
  }

  cout << dp[n];

  return 0;
}
