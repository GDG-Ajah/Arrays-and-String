// arrays in JavaScript are dynamic arrays (this is just for practice)
class DynamicArray {

    #data = new Array();
    #capacity = 1;
    #size = 0;

    /**
     * 
     * @param  {...any} elements elements of the array
     */
    constructor(...elements) {
        for (let i = 0; i < elements.length; i++) {
            this.add(elements[i]);
        }
    }

    /**
     * Prints out the content of the array.
     */
    print() {
        const arr = [];

        for (let i = 0; i < this.#size; i++) {
            arr.push(this.#data[i]);
        }

        console.log(arr);
    }

    /**
     * 
     * @returns the size of the array
     */
    size() {
        return this.#size;
    }

    /**
     * 
     * @returns the capacity of the array
     */
    capacity() {
        return this.#capacity;
    }

    /**
     * Appends an element to the end of an array.
     * 
     * @param {*} val the value to be appended
     */
    add(val) {

        if (this.#capacity === this.#size) {
            this.#capacity *= 2;

            for (let i = this.#capacity - this.#size; i < this.#capacity; i++) {
                this.#data.push(null);
            }

        }
        this.#data[this.#size] = val;

        this.#size++;
    }

    /**
     * 
     * @param {number} i index of the array element
     * @returns the element of the array at the specified index.
     */
    get(i) {

        try {

            if (i >= this.#size || Math.abs(i) > this.#size) {
                throw new Error('Array index is out of bounds.');
            } else if (i < 0 && Math.abs(i) <= this.#size) {
                // supports negative indices

                const emptyElements = this.#capacity - this.#size;

                return this.#data[this.#capacity - emptyElements - (Math.abs(i))]
            } else {
                return this.#data[i];
            }

        } catch (error) {
            console.error(error);
        }

    }

    /**
     * Modifies the value of an element at a specified index.
     * 
     * @param {number} i index of the array element
     * @param {*} val the value the corresponding element should be updated to
     * @returns {boolean} a boolean indicating if the set operation was successful
     */
    set(i, val) {
        try {

            if (i >= this.#size || Math.abs(i) > this.#size) {
                throw new Error('Array index is out of bounds.');

            } else {

                let index = i;

                if (i < 0) {
                    const emptyElements = this.#capacity - this.#size;

                    index = this.#capacity - emptyElements - (Math.abs(i));
                }

                this.#data[index] = val;

                return true;
            }
        } catch (error) {
            console.error(error);

            return false;
        }
    }
}


let array = new DynamicArray();
console.log(array.size());
console.log(array.capacity());

array.add(1);
console.log(array.size());
console.log(array.capacity());

array.add(2);
console.log(array.size());
console.log(array.capacity());

array.add(3);
console.log(array.size());
console.log(array.capacity());

array.add(4);
console.log(array.size());
console.log(array.capacity());

array.add(5);
console.log(array.size());
console.log(array.capacity());

console.log(array.get(1));
console.log(array.set(1, 200));

console.log(array.get(1));

array.set(8, 40);

array.print();