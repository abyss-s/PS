#include <iostream>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int sum = 0;
  for (int i = 0; i < 4; i++) {
    int n;
    cin >> n;
    sum += n;
  }

  int m = sum / 60;
  int s = sum % 60;

  cout << m << endl << s;

  return 0;
}