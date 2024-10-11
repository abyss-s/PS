#include <iostream>
#include <stack>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  stack<int> stk;
  while (n--) {
    int command;
    cin >> command;

    if (command == 1) {
      int x;
      cin >> x;
      stk.push(x);
    } else if (command == 2) {
      if (stk.empty()) {
        cout << -1 << '\n';
      } else {
        cout << stk.top() << '\n';
        stk.pop();
      }
    } else if (command == 3) {
      cout << stk.size() << '\n';
    } else if (command == 4) {
      cout << (stk.empty() ? 1 : 0) << '\n';
    } else if (command == 5) {
      if (stk.empty())
        cout << -1 << '\n';
      else
        cout << stk.top() << '\n';
    }
  }

  return 0;
}
