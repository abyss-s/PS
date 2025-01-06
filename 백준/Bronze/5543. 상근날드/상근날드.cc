#include <algorithm>
#include <iostream>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int a[3], b[2];

  for (int i = 0; i < 3; i++)
    cin >> a[i];

  for (int i = 0; i < 2; i++)
    cin >> b[i];

  sort(a, a + 3);
  sort(b, b + 2);

  cout << a[0] + b[0] - 50;
}
