#include <iostream>
#include <string>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string s;
  cin >> s;

  // 사용된 알파벳 개수 개수 저장할 배열 선언 및 초기화
  int c[26] = {0};

  // 대소문자 통일해서 등장한 문자 개수 세기
  for (int i = 0; i < s.size(); i++) {
    if (s[i] >= 'a' && s[i] <= 'z') {
      c[s[i] - 'a']++;  // 소문자
    } else if (s[i] >= 'A' && s[i] <= 'Z') {
      c[s[i] - 'A']++;  // 대문자
    }
  }

  int max_cnt = 0;
  char max_char;
  for (int i = 0; i < 26; i++) {
    if (c[i] > max_cnt) {
      max_cnt = c[i];
      max_char = i + 'A';
    } else if (c[i] == max_cnt)
      max_char = '?';
  }

  cout << max_char;

  return 0;
}