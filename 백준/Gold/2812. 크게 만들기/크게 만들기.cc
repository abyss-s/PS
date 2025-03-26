#include <iostream>
#include <string>
#include <deque>
using namespace std;
int main(){
    int n,k;
    string num;
    int cnt=0;
    cin >> n >> k>> num;
    deque<char> d;
    for(char c : num){
        while(!d.empty()&& cnt<k && d.back() < c){
            d.pop_back();
            cnt++;
        }
        d.push_back(c);
    }
    while(cnt<k){
        d.pop_back();
        cnt++;
    }
    string res(d.begin(),d.end());
    cout << res <<"\n";
    return 0;
}