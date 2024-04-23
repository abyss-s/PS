#include <iostream>
#include <iomanip>
using namespace std;

int main() {
	int sum = 0;
	for (int i = 0; i < 5; i++) {
		int n;
		cin >> n;
		if (n >= 40) sum += n;
		else sum += 40;
	}
	cout << sum / 5;
	return 0;
}