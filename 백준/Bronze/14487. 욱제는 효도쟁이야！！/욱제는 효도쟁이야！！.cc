#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
  int n;
  cin >> n;

  vector<int> v(n);

  for (int i = 0; i < n; i++) {
    int a;
    cin >> a;
    v.push_back(a);
  }

  sort(v.begin(), v.end());
  v.pop_back();
  
  int sum = 0;
  for (int i = 0; i < v.size(); i++) {
    sum += v[i];
  }
  cout << sum;
  return 0;
}