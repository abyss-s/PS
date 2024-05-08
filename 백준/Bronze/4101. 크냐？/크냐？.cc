#include <iostream>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  while (true) {
    int a, b;
    cin >> a >> b;
    if (a == 0 && b == 0)
      break;
    else {
      if (a > b)
        cout << "Yes" << endl;
      else
        cout << "No" << endl;
    }
  }

  return 0;
}