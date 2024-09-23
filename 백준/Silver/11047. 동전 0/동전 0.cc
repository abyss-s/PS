#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;        // 동전개수
  long long k;  // 최솟값

  cin >> n >> k;

  vector<long long> coins(n);

  for (int i = 0; i < n; i++) {
    // 동전의 가치 오름차순으로 주어짐
    cin >> coins[i];
  }

  int answer = 0;

  // 가장 가치가 높은 동전부터 사용
  for (int i = n - 1; i >= 0; i--) {
    if (coins[i] <= k) {
      answer += k / coins[i]; // 사용할 동전 개수 추가
      k %= coins[i]; // 다음으로 사용할 동전 찾기 위해 나누기
    }
  }

  cout << answer;

  return 0;
}