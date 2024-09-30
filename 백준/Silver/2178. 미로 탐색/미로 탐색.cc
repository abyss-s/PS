#include <iostream>
#include <queue>
using namespace std;

int n, m;
int arr[100][100];   // 미로 배열
int dist[100][100];  // 최단 거리 배열

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  // 미로의 크기 입력
  cin >> n >> m;

  // dx,dy: 상, 우, 하, 좌 방향 벡터
  int dx[4] = {1, 0, -1, 0};
  int dy[4] = {0, 1, 0, -1};

  // 미로 입력 받기 (행->렬)
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      // 먼저 문자로 처리하고 0을 빼서 숫자로 변환
      char c;
      cin >> c;
      arr[i][j] = c - '0';
    }
  }

  // BFS에 사용할 큐
  queue<pair<int, int>> q;
  // 시작점 (0, 0) 큐에 넣고, 거리 초기화
  q.push({0, 0});
  dist[0][0] = 1;  // 시작점의 거리를 1로 설정 (첫 칸 포함)

  // BFS 탐색 시작
  while (!q.empty()) {
    auto cur = q.front();
    q.pop();

    // 현재 위치에서 4방향으로 이동
    for (int dir = 0; dir < 4; dir++) {
      int nx = cur.first + dx[dir];
      int ny = cur.second + dy[dir];

      // 범위 체크
      if (nx < 0 || nx >= n || ny < 0 || ny >= m)
        continue;

      // 벽이거나 이미 방문한 곳이면 건너뛰기
      if (arr[nx][ny] == 0 || dist[nx][ny] != 0)
        continue;

      // 새로운 곳이면 거리 갱신하고 큐에 넣기
      dist[nx][ny] = dist[cur.first][cur.second] + 1;
      q.push({nx, ny});
    }
  }

  // 도착 지점에서 거리 출력
  cout << dist[n - 1][m - 1];

  return 0;
}
