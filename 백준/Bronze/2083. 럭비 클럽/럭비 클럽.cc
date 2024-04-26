#include <iostream>
#include <string>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	int age = 0, weight = 0;
	string name = "";
	
	while (true) {
		cin >> name >> age >> weight;
		if (name == "#" && age == 0 && weight == 0) {
			break;
		}
		if (age > 17 || weight >= 80) {
			cout << name << " " << "Senior" << endl;
		}
		else {
			cout << name << " " << "Junior" << endl;
		}
	}
	return 0;
}
