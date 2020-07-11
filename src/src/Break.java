/**
 * Created by PC on 07.06.2017.
 */
public class Break {
    public static void main(String[] args) {
        label1: for (int i = 0; i < 10; i++) {
            if (i == 5) break label1;
            System.out.println(i);
        }
    }
}
