using System;

public class DynamicArray<T> : IDynamicArrary<T>
{
    private T[] array;
    private int count;
    private int capacity;

    public DynamicArray()
    {
        capacity = 1; // Initial capacity
        array = new T[capacity];
        count = 0;
    }

    public int Add(T val)
    {
        if (count == capacity)
        {
            // Double the capacity if necessary
            capacity *= 2;
            Array.Resize(ref array, capacity);
        }

        array[count] = val;
        return count++;
    }

    public T Get(int i)
    {
        if (i < 0 || i >= count)
        {
            throw new IndexOutOfRangeException("Index is out of bounds.");
        }

        return array[i];
    }

    public void Set(int i, T val)
    {
        if (i < 0 || i >= count)
        {
            throw new IndexOutOfRangeException("Index is out of bounds.");
        }

        array[i] = val;
    }

    public int Size()
    {
        return count;
    }

    public int Capacity()
    {
        return capacity;
    }

}
