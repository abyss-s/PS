#include <iostream>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  long long int n;
  cin >> n;
  cout << n / 100 * 78 << " " << n / 1000 * 956;

  return 0;
}