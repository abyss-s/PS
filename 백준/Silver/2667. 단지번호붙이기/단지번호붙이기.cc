#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int g[25][25];
bool v[25][25];
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};
int n;

int dfs(int x, int y) {
  int cnt = 1;
  v[x][y] = true;

  for (int i = 0; i < 4; i++) {
    int nx = x + dx[i], ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < n && ny < n && !v[nx][ny] &&
        g[nx][ny] == 1) {
      cnt += dfs(nx, ny);
    }
  }
  return cnt;
}

int main() {
  cin >> n;
  cin.ignore();

  for (int i = 0; i < n; i++) {
    string line;
    getline(cin, line);
    for (int j = 0; j < n; j++) {
      g[i][j] = line[j] - '0';  // 아스키 자동 변환
    }
  }

  vector<int> danzis;
  int cnt = 0;

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      if (!v[i][j] && g[i][j] == 1) {
        int size = dfs(i, j);
        danzis.push_back(size);
        cnt++;
      }
    }
  }

  cout << cnt << "\n";
  sort(danzis.begin(), danzis.end());

  for (int i = 0; i < danzis.size(); i++) {
    cout << danzis[i] << "\n";
  }

  return 0;
}
