#include <iostream>
#include <set>
#include <string>
using namespace std;

int main() {
  string f_body, f_tail;
  string m_body, m_tail;
  cin >> f_body >> f_tail;
  cin >> m_body >> m_tail;

  set<pair<string, string>> s;

  string colors[] = {f_body, f_tail, m_body, m_tail};

  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      s.insert({colors[i], colors[j]});
    }
  }

  for (auto pair : s) {
    cout << pair.first << " " << pair.second << "\n";
  }
}