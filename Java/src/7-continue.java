class Continue {
    public static void main(String[] args) {
        int i = 0;
        label1:
        while (i < 10) {
            i++;
            System.out.println("Hello");
            if (i == 5) continue label1;
            System.out.println("World");
        }
    }
}
