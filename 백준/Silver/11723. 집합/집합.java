import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int bitset = 0;
        int tc = Integer.parseInt(br.readLine());
        for (int i = 0; i < tc; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();
            int num;
            switch (cmd) {
                case "add":
                    num = Integer.parseInt(st.nextToken());
                    bitset |= (1 << (num - 1));
                    break;
                case "remove":
                    num = Integer.parseInt(st.nextToken());
                    bitset &= ~(1 << (num - 1));
                    break;
                case "check":
                    num = Integer.parseInt(st.nextToken());
                    sb.append((bitset & (1 << (num - 1))) != 0 ? 1 : 0).append("\n");
                    break;
                case "toggle":
                    num = Integer.parseInt(st.nextToken());
                    bitset ^= (1 << (num - 1));
                    break;
                case "all":
                    bitset = (1 << 21) - 1;
                    break;
                case "empty":
                    bitset = 0;
                    break;
            }
        }
        System.out.print(sb);
    }
}