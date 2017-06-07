import java.util.Arrays;
import java.util.function.Function;

/**
 * Created by PC on 07.06.2017.
 */
public class Map {
    public static void main(String[] args) {

        Function<Integer,Void> log = s -> {System.out.println(s); return null;};
        Arrays.stream(new Integer[]{7, 10, 1, 5, 2}).map(x -> x * 2).forEach(System.out::println);
    }
}
