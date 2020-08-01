class Break {
    public static void main(String[] args) {
        label1: for (int i = 0; i < 10; i++)
        {
            if (i == 7) break label1;
            System.out.println(i);
        }
    }
}
