#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  long long n;
  cin >> n;

  vector<long long> dp(n + 1, 0);
  dp[1] = 1;
  dp[2] = 1;

  for (long long i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  cout << dp[n] << "\n";

  return 0;
}
