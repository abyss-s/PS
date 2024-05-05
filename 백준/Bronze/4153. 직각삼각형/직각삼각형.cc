#include <algorithm>
#include <iostream>
using namespace std;

int main() {
  while (true) {
    int arr[3];
    int a = 1, b = 1, c = 1;
    cin >> a >> b >> c;
    if (a == 0 && b == 0 && c == 0)
      break;
    arr[0] = a;
    arr[1] = b;
    arr[2] = c;
    sort(arr, arr + 3);
    if (arr[2] * arr[2] == arr[0] * arr[0] + arr[1] * arr[1])
      cout << "right\n";
    else
      cout << "wrong\n";
  }
}