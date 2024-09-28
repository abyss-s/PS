#include <algorithm>
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

vector<vector<int>> graph;  // 2차원 벡터로 선언
vector<bool> visited;

// 깊이 우선 탐색: 스택 재귀
void dfs(int x) {
  visited[x] = true;
  cout << x << " ";

  // 방문하지 않은 노드라면 재귀 반복
  for (int i = 0; i < graph[x].size(); i++) {
    int y = graph[x][i];
    if (!visited[y])
      dfs(y);
  }
}

// 너비 우선 탐색: 큐
void bfs(int start) {
  queue<int> q;
  visited[start] = true;
  q.push(start);

  while (!q.empty()) {
    int x = q.front();
    q.pop();
    cout << x << " ";

    for (int i = 0; i < graph[x].size(); i++) {
      int y = graph[x][i];
      if (!visited[y]) {
        visited[y] = true;
        q.push(y);
      }
    }
  }
}

int main() {
  int n, m, v;
  cin >> n >> m >> v;

  // 그래프 및 방문 정보 초기화
  graph.resize(n + 1);
  visited.resize(n + 1, false);

  // 간선을 입력받아 그래프에 추가
  for (int i = 0; i < m; i++) {
    int u, v;
    cin >> u >> v;
    graph[u].push_back(v);
    graph[v].push_back(u);
  }

  // 인접 리스트 정렬 (정점 번호가 작은 것부터 방문하기 위해)
  for (int i = 1; i <= n; i++) {
    sort(graph[i].begin(), graph[i].end());
  }

  // DFS
  dfs(v);
  cout << endl;

  // visited 배열 초기화
  fill(visited.begin(), visited.end(), false);

  // BFS
  bfs(v);
  cout << endl;

  return 0;
}