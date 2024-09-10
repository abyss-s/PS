#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

int main() {
  // 실행속도 높이기
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  long long n, m;
  cin >> n >> m;

  vector<string> numberToName(n + 1);  // 번호로 이름을 찾을 때 사용
  unordered_map<string, long long>
      nameToNumber;  // 이름으로 번호를 찾을 때 사용

  for (long long i = 1; i <= n; i++) {  
    cin >> numberToName[i]; // 이름 저장
    nameToNumber[numberToName[i]] = i; // 번호 저장
  }

  while (m--) {
    string input;
    cin >> input;

    if (isdigit(input[0])) {       
      long long num = atoi(input.c_str());  // 문자열 -> 정수 변환
      cout << numberToName[num] << '\n';     // 해당 번호의 포켓몬 이름 출력
    } else {                       
      cout << nameToNumber[input] << '\n';  // 해당 이름의 포켓몬 번호 출력
    }
  }

  return 0;
}
