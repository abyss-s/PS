#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int t;
  cin >> t;

  vector<int> dp(12);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  while (t--) {
    int n;
    cin >> n;

    for (int i = 4; i <= n; i++) {
      dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }

    cout << dp[n] << "\n";
  }

  return 0;
}
