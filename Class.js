class DynamicArray {
  constructor() {
    this.capacity = 1; // Initial capacity
    this.length = 0; // Number of elements in the array
    this.array = new Array(this.capacity);
  }

  add(val) {
    if (this.length === this.capacity) {
      this._resizeArray(this.capacity * 2); // Double the capacity if necessary
    }
    this.array[this.length] = val;
    this.length++;
  }

  get(i) {
    if (i < 0 || i >= this.length) {
      throw new Error("Index out of bounds");
    }
    return this.array[i];
  }

  set(i, val) {
    if (i < 0 || i >= this.length) {
      throw new Error("Index out of bounds");
    }
    this.array[i] = val;
  }

  size() {
    return this.length;
  }

  capacity() {
    return this.capacity;
  }

  _resizeArray(newCapacity) {
    const newArray = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    this.capacity = newCapacity;
  }
}

module.exports = { DynamicArray };
