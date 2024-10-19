#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;

  int total = 0;
  while (n--) {
    string str;
    cin >> str;
    for (int i = 0; i < str.length() - 1; i++) {
      if (str[i] == '0' && str[i + 1] == '1' ||
          str[i] == 'O' && str[i + 1] == 'I') {
        total++;
        break;
      }
    }
  }
  cout << total;
  return 0;
}
