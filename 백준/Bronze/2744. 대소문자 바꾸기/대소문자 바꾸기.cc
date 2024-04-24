#include <iostream>
using namespace std;

int main() {
	string str;
	cin >> str;
	for (int i = 0; i < str.length(); i++) {
		char c = str[i];
		char temp;
		if (c >= 65 && c <= 90) 
			temp=c + 32;
		else if (c >= 97 && c <= 122) 
			temp = c - 32;
		str[i] = temp;
	}
	cout << str;
	return 0;
}