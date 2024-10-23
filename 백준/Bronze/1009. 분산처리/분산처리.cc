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
    int a, b;
    cin >> a >> b;
    a %= 10;

    if (a == 0) {
      cout << 10 << endl;
      continue;
    }

    int res = 1;
    for (int i = 0; i < b; i++) {
      res = (res * a) % 10;
    }
    cout << res << endl;
  }
}