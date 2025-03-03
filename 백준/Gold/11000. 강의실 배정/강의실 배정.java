import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		int[][] v = new int[n][2]; // si, ti

		for (int i = 0; i < n; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			v[i][0] = Integer.parseInt(st.nextToken());
			v[i][1] = Integer.parseInt(st.nextToken());
		}

		Arrays.sort(v, Comparator.comparingInt(a -> a[0]));

		PriorityQueue<Integer> pq = new PriorityQueue<>();
		pq.add(v[0][1]);
		for (int i = 1; i < n; i++) {
			if (pq.peek() <= v[i][0]) {
				pq.poll();
			}
			pq.add(v[i][1]);
		}
		System.out.println(pq.size());
	}
}