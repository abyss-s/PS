import java.util.Scanner;

public class Main {
	public static final int M = Integer.MAX_VALUE;

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int minVinyl = 5001;
		for(int i = 0, size = n/5; i <= size; i++) {
			int r = n - 5*i;
			if(r % 3 == 0) {
				minVinyl = Math.min(minVinyl, i + r/3);
			}
		}
		System.out.println(minVinyl == 5001 ? -1 : minVinyl
		);
	} // end of main
} // end of class