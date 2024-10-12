#include <iostream>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  long long n, m, c;
  cin >> n >> m >> c;

  if (n + m >= c*2)
    cout << (n + m) - c * 2;
  else
    cout << n + m;

  return 0;
}
