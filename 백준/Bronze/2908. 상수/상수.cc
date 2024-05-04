#include <iostream>
#include <string>
using namespace std;

string reverse(string str) {
  string newStr = str;
  for (int i = 0; i < str.length()/2; i++) {
    char temp = str[i];
    newStr[i] = str[str.length() - 1 - i];
    newStr[str.length() - 1 - i] = temp;
  }
  return newStr;
}

int main() {
  string a, b;
  cin >> a >> b;
  string newA, newB;
  newA = reverse(a);
  newB = reverse(b);
  if (stoi(newA) > stoi(newB))
    cout << newA;
  else
    cout << newB;
  return 0;
}