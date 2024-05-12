#include <iostream>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  string str;
  cin >> str;
  for (int i = 0; i < str.length(); i += 10) {
    cout << str.substr(i, 10) << "\n";
  }

  return 0;
}