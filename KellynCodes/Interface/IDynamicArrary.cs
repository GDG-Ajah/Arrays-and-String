public interface IDynamicArrary<T>
{
    public int Add(T val);
    public T Get(int i);
    public void Set(int i, T val);
    public int Size();
    public int Capacity();
}