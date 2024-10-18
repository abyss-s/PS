#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  while (n--) {
    string str;
    cin >> str;
    int score = 0;    // 총 점수
    int current = 0;  // 0 연속 점수는 따로 계산

    // 문자열 길이만큼 반복
    for (char ch : str) {
      if (ch == 'O') {
        current++;
        score += current;
      } else {
        current = 0;
      }
    }
    cout << score << '\n';
  }
  return 0;
}
