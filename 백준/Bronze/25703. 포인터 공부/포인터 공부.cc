#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;
  if (n == 1) {
    cout << "int a;"
         << "\nint *ptr = &a;";
  } else if (n == 2) {
    cout << "int a;"
         << "\nint *ptr = &a;"
         << "\nint **ptr2 = &ptr;";
  } else {
    cout << "int a;"
         << "\nint *ptr = &a;"
         << "\nint **ptr2 = &ptr;\n";
    for (int i = 3; i <= n; i++) {
      cout << "int ";
      for (int j = 1; j <= i; j++) {
        cout << "*";
      }
      cout << "ptr" << i;
      cout << " = &ptr" << i - 1 << ";\n";
    }
  }
  return 0;
}