#include <iostream>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n,m;
  cin >> n >> m;

  if (100 * n >= m)
    cout << "Yes";
  else
    cout << "No";

  return 0;
}
