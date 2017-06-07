import java.util.Arrays;
import java.util.List;

/**
 * Created by PC on 07.06.2017.
 */
public class ForEach {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(7, 10, 1, 5, 2);
        list.forEach(item -> System.out.println(String.format("%s, %s, %s",item,list.indexOf(item),
                list.toString())));
        System.out.println();
        list.forEach(System.out::print);
        System.out.println();
        list.forEach(x -> System.out.print(x));
    }
}
