#include <iostream>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  long long k, a, b, c, d;
  cin >> k >> a >> b >> c >> d;

  long long res1 = a * k + b, res2 = c * k + d;

  if (res1 == res2)
    cout << "Yes " << res1;
  else
    cout << "No";

  return 0;
}