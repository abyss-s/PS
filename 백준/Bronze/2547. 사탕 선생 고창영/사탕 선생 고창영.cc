#include <iostream>
#include <string>
using namespace std;

int main() {
    int t;
    cin >> t;
    cin.ignore();  // 빈 입력 무시

    while (t--) {
        string line;
        getline(cin, line); 

        long long n;
        cin >> n;
        
        long long total = 0;
        for (int i = 0; i < n; i++) {
            long long candies;
            cin >> candies;
            total = (total + candies) % n;  
        }

        cout << (total == 0 ? "YES" : "NO") << "\n";
    }
    return 0;
}