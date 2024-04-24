#include <iostream>
#include <string>
using namespace std;

int main() {
	while (true) {
		string str;
		getline(cin, str);
		if (str == "#") break;
		else {
			int cnt = 0;
			for (size_t i = 0; i < str.length(); i++) {
				if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'
					|| str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U')
					cnt++;
			}
			cout << cnt <<"\n";
		}
	}
	return 0;
}