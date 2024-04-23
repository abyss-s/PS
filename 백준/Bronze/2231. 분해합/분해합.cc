#include <iostream>
#include <string>
using namespace std;

int main() {
	int n;
	cin >> n;
	int result = 0;

	for (int i = 1; i < n; i++) {
		int sum = i;  // 분해합
		int temp = i;  // 자릿수 합 용

		while (sum > 0) {
			/* 자릿수별로 더하기 */
			sum += temp % 10;
			temp /= 10;
			if (temp == 0) break;
		}

		if (sum == n) {
			/* 입력받은 n과 일치되면 for 문 종료 */
			result = i;
			break;
		}
	}
	
	cout << result;
	return 0;
}