public interface Lst {
    void add(Object e);
    Object get(int index);
    boolean set(int index, Object e);
    int size();
    int capacity();
}
