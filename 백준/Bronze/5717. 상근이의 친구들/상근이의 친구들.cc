#include <iostream>
using namespace std;

int sum(int a, int b) {
  return a + b;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  while (true) {
    int m, f;
    cin >> m >> f;
    if (sum(m, f) == 0)
      break;
    cout << sum(m, f) << endl;
  }

  return 0;
}