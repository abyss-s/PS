#include <iostream>
#include <vector>
using namespace std;

const int MAX_N = 501;
const int MAX_M = 501;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, m;
  cin >> n >> m;

  vector<int> tap(m);

  for (int i = 0; i < m; i++) {
    cin >> tap[i];
  }

  // 코드 꽂기 가능한 최대 학생수 계산
  int maxCnt = 0;

  for (int i = 0; i < m; i++) {
    maxCnt += (tap[i] + 1) / 2;
  }

  if (maxCnt >= n)
    cout << "YES";
  else
    cout << "NO";

  return 0;
}
