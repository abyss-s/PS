#include <iostream>
using namespace std;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    long long int a, b;
    long long int sum = 0;
    cin >> a >> b;
    if (a < b)
        sum = b * (b + 1) / 2 - (a) * (a - 1) / 2;
    else
        sum = a * (a + 1) / 2 - (b) * (b - 1) / 2;
    cout << sum << '\n';
}