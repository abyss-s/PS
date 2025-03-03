import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[][] v = new int[n][2]; // si, ti
		for (int i = 0; i < n; i++) {
			v[i][0] = sc.nextInt();
			v[i][1] = sc.nextInt();
		}

		Arrays.sort(v, Comparator.comparingInt(a -> a[0]));

		PriorityQueue<Integer> pq = new PriorityQueue<>();
		pq.add(v[0][1]);
		for (int i = 1; i < n; i++) {
			if (pq.peek() <= v[i][0]) { // top(ti) <= si
				pq.poll(); // pop(유지)
			}
			pq.add(v[i][1]); // add
		}
		System.out.println(pq.size());
	}
}