#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  vector<long long> v(n + 1); // 계단 별 점수 배열

  for (int i = 1; i <= n; i++) {
    cin >> v[i];
  }

  vector<long long> dp(n + 1, 0); // 총 점수 배열

  dp[1] = v[1];
  dp[2] = v[1] + v[2];
  dp[3] = max(v[1] + v[3], v[2] + v[3]);

  for (int i = 4; i < n + 1; i++) {
    // 두 계단을 건너뛴 경우 or 한 계단만 건너뛴 경우
    dp[i] = max(dp[i - 2] + v[i], dp[i - 3] + v[i - 1] + v[i]);
  }

  cout << dp[n];

  return 0;
}