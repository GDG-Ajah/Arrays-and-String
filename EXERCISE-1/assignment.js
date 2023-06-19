/** * Implement a dynamic array in your chosen language with the following operations
* Add(val)
* An element to the end of the array. 
* Copy and double if necessary.
* Get(i) - returns the element at index i, throw exception if out of bounds.
* Set(i, val) - sets the value at index i to val. throw exception if out of bounds.
* Size() - returns the size of the array
* Capacity() - returns the capacity of the array
*/

// Array class
class Array {
    constructor() {
        this.array = [];
        this.size = 0;
        this.capacity = 0;
    }

    // Add(val)
    add(val) {
        // if array is empty
        if (this.size === 0) {
            this.array[0] = val;
            this.size++;
            this.capacity++;
        } else {
            // if array is full
            if (this.size === this.capacity) {
                // double the size
                this.capacity = this.capacity * 2;
                // copy the array
                let temp = [];
                for (let i = 0; i < this.size; i++) {
                    temp[i] = this.array[i];
                }
                this.array = temp;
            }
            // add the value to the end of the array
            this.array[this.size] = val;
            this.size++;
        }
    }

    // Get(i)
    get(i) {
        // if i is out of bounds
        if (i < 0 || i >= this.size) {
            throw new Error("Index out of bounds");
        } else {
            return this.array[i];
        }
    }

    // Set(i, val)
    set(i, val) {
        // if i is out of bounds
        if (i < 0 || i >= this.size) {
            throw new Error("Index out of bounds");
        } else {
            this.array[i] = val;
        }
    }

    // Size()
    getSize() {
        return this.size;
    }

    // Capacity()
    getCapacity() {
        return this.capacity;
    }
}

// // Test cases

// // Create an array

// let array = new Array();

// // Add 5 elements to the array

// array.add(1);
// array.add(2);
// array.add(3);
// array.add(4);
// array.add(5);

// // Get the size and capacity of the array

// console.log("Size: " + array.getSize());
// console.log("Capacity: " + array.getCapacity());

// // Add 5 more elements to the array

// array.add(6);
// array.add(7);
// array.add(8);
// array.add(9);
// array.add(10);

// // Get the size and capacity of the array

// console.log("Size: " + array.getSize());
// console.log("Capacity: " + array.getCapacity());

// // Get the element at index 5

// console.log("Element at index 5: " + array.get(5));

// // Set the element at index 5 to 100

// array.set(5, 100);

// // Get the element at index 5


