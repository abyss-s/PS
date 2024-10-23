#include <algorithm>
#include <iostream>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int t;
  cin >> t;

  while (t--) {
    int n, m;
    cin >> n >> m;
    unsigned long long res = 1;
    for (int i = 0; i < n; i++) {
      res *= (m - i);
      res /= (i + 1);
    }
    cout << res << endl;
  }
}