#include <iostream>
using namespace std;

int main() {
  int t = 5;
  int sum = 0;
  while (t--) {
    int c;
    cin >> c;
    sum += c;
  }
  cout << sum;
}