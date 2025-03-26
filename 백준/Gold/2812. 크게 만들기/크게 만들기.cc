#include <iostream>
#include <string>
#include <stack>
#include <vector>
using namespace std;
int main(){
    int n,k;
    string num, rem;
    cin >> n >> k>> num;
    vector<char> v;
    for(char c : num){
        while(!v.empty()&& k > 0 && v.back() < c){
            v.pop_back();
            k--;
        }
        v.push_back(c);
    }
    while (k > 0 && !v.empty()) {
           v.pop_back();
           k--;
       }
    for(char c: v) cout << c;
    cout << "\n";
    return 0;
}