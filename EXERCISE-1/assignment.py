# * Implement a dynamic array in your chosen language with the following operations
# * Add(val)
# * An element to the end of the array. 
# * Copy and double if necessary.
# * Get(i) - returns the element at index i, throw exception if out of bounds.
# * Set(i, val) - sets the value at index i to val. throw exception if out of bounds.
# * Size() - returns the size of the array
# * Capacity() - returns the capacity of the array


class DynamicArray:

    def __init__(self):
        self.capacity = 1
        self.size = 0
        self.array = [None] * self.capacity

    def add(self, val):
        if self.size == self.capacity:
            self.resize()
        self.array[self.size] = val
        self.size += 1

    def get(self, i):
        if i < 0 or i >= self.size:
            raise Exception("Index out of bounds")
        return self.array[i]

    def set(self, i, val):
        if i < 0 or i >= self.size:
            raise Exception("Index out of bounds")
        self.array[i] = val

    def size(self):
        return self.size

    def capacity(self):
        return self.capacity

    def resize(self):
        self.capacity *= 2
        new_array = [None] * self.capacity
        for i in range(self.size):
            new_array[i] = self.array[i]
        self.array = new_array

