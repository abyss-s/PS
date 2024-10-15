#include <cmath>
#include <iostream>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int t;
  cin >> t;

  while (t--) {
    long long x, y;
    cin >> x >> y;

    double dist = y - x;                // 거리
    double dist_sqrt = sqrt(dist);      // 거리 제곱근
    int dist_round = round(dist_sqrt);  // 반올림

    if (dist_sqrt <= dist_round)
      cout << dist_round * 2 - 1 << '\n';
    else
      cout << dist_round * 2 << '\n';
  }

  return 0;
}
