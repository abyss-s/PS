#include <algorithm>
#include <iostream>
using namespace std;

int main() {
  int n;  // 방번호
  cin >> n;

  int cnt[10] = {0};  // 0부터 9까지의 등장 횟수를 저장할 배열

  while (n > 0) {
    int a = n % 10;
    cnt[a]++;
    n /= 10;
  }

  // 6과 9가 등장하는 개수는 합쳐서 계산해야 함
  int cnt_tmp = (cnt[6] + cnt[9] + 1) / 2;
  cnt[6] = cnt_tmp;
  cnt[9] = cnt_tmp;

  int cnt_max = cnt[0];
  for (int i = 0; i < 10; i++) {
    if (cnt[i] > cnt_max) {
      cnt_max = cnt[i];
    }
  }

  cout << cnt_max;

  return 0;
}