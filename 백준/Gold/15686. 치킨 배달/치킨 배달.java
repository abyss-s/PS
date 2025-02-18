import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	static int n, m; // 도시 크기, 남겨야 하는 치킨집
	static int[][] chickens; // 치킨집 위치 저장
	static int[][] houses; // 집 위치 저장
	static int chickenCount = 0; // 치킨집 개수
	static int houseCount = 0; // 집 개수
	static int INF = 100000000; // 최소 거리 계산에 사용할 상수값 선언
	static int result = INF; // 답(최소 거리) 초기화

	// 거리 계산 함수
	public static int calcDist(int x1, int y1, int x2, int y2) {
		return Math.abs(x1 - x2) + Math.abs(y1 - y2);
	}

	// 조합으로 순회하면서 치킨집을 선택해 최소 거리 계산
	public static void combi(int[][] selected, int start, int r) {
		// m개 선택되었을 때
		if (r == m) {
			int totalDist = 0;
			for (int i = 0; i < houseCount; i++) {
				int minDist = INF;
				for (int j = 0; j < m; j++) {
					// 집 x, y랑 치킨집 x, y (고른 치킨집으로 해야함)
					int dist = calcDist(houses[i][0], houses[i][1], selected[j][0], selected[j][1]);
					minDist = Math.min(minDist, dist); // 최소 거리 갱신
				}
				totalDist += minDist;
			}
			result = Math.min(result, totalDist); // 최소 거리 갱신
			return;
		}
		
		for (int i = start; i < chickenCount; i++) {
			selected[r] = chickens[i]; // 선택된 치킨집 저장
			combi(selected, i + 1, r + 1);
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		n = Integer.parseInt(st.nextToken()); // 도시 크기
		m = Integer.parseInt(st.nextToken()); // 남길 치킨집 개수

		// n * n크기 / 
		chickens = new int[n * n][2];
		houses = new int[n * n][2];

		// 도시 정보 입력 처리
		for (int i = 0; i < n; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < n; j++) {
				int token = Integer.parseInt(st.nextToken());
				// 집이면 집 배열에
				if (token == 1) {
					if (houseCount < houses.length) {
						houses[houseCount++] = new int[]{i, j};
					}
				}
				// 치킨이면 치킨집 배열에
				else if (token == 2) {
					if (chickenCount < chickens.length) {
						chickens[chickenCount++] = new int[]{i, j};
					}
				}
			}
		}

		// 선택할 치킨집 배열
		int[][] noClose = new int[m][2];

		// 폐업시키지 않을 치킨집 조합 계산
		combi(noClose, 0, 0);
		System.out.println(result);
	}
}