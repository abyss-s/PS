#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int n;
  cin >> n;
  vector<pair<int, string>> arr(n);

  for (int i = 0; i < n; i++) {
    cin >> arr[i].first >> arr[i].second;
  }

  // 나이 오름차순 정렬
  stable_sort(arr.begin(), arr.end(),
              [](const pair<int, string>& a, const pair<int, string>& b) {
                return a.first < b.first;
              });

  for (auto& m : arr)
    cout << m.first << " " << m.second << "\n";
}
