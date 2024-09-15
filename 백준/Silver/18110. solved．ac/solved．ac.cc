#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  long long n;  // 난이도 의견의 개수
  cin >> n;

  if (n == 0) {
    cout << 0;
  } else {
    vector<long long> arr(n);  // 난이도 의견들 저장할 동적 배열 선언

    for (int i = 0; i < n; i++)
      cin >> arr[i];

    sort(arr.begin(), arr.end());  // 난이도 의견을 오름차 순으로 정렬
    long long n_del = round(static_cast<double> (n) *
                            0.15);  // 앞뒤로 제외할 의견 개수 구하고 반올림

    long long sum=0;  // 난이도 합
    for (int i = n_del; i < n-n_del; i++)
      sum += arr[i];

    long long ave =
        round(static_cast<double>(sum) / (n - 2 * n_del));  // 난이도 평균 계산
    cout << ave;
  }

  return 0;
}
