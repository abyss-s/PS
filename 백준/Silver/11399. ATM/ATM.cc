#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
  int n;
  cin >> n;

  vector<int> v(n);

  for (int i = 0; i < n; i++) {
    cin >> v[i];
  }

  sort(v.begin(), v.end());

  vector<int> v_sum(n, 0);
  int max = 0;
  for (int i = 0; i < n; i++) {
    max += v[i] * (n - i);
  }
  cout << max;

  return 0;
}