#include <iostream>
#include <string>
using namespace std;

int main() {
  string a, b, res;
  cin >> a >> b;

  for (char c : a) {
    res += c;

    if (res.size() >= b.size()) {
      int idx = res.size() - b.size();
      if (res.substr(idx) == b)
        res.erase(idx);
    }
  }

  cout << (res.empty() ? "FRULA" : res) << '\n';
  return 0;
}
