function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];
  let visited = Array.from({ length: n }, () => new Array(m).fill(0));
  let q = [[0, 0, 1]];
  visited[0][0] = 1;
  // bfs
  while (q.length > 0) {
    let [x, y, dist] = q.shift();

    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    for (let j = 0; j < 4; j++) {
      let nx = x + dx[j];
      let ny = y + dy[j];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && visited[nx][ny] === 0) {
        visited[nx][ny] = 1;
        maps[nx][ny] = 0;
        q.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}
