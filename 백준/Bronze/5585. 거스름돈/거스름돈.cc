#include <iostream>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;               // 타로가 지불할 돈
  int change = 1000 - n;  // 잔돈

  int coins[6] = {500, 100, 50, 10, 5, 1};  // 잔돈 동전 배열
  int answer = 0;                           // 잔돈 매수

  // 가장 가치가 높은 동전부터 사용
  for (int i = 0; i < 6; i++) {
    if (coins[i] <= change) {
      answer += change / coins[i];  // 사용할 동전 개수 추가
      change %= coins[i];  // 다음으로 사용할 동전 찾기 위해 나누기
    }
  }

  cout << answer;

  return 0;
}