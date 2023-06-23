class DynamicArray {
	constructor () {
		this._capacity = 1;
		this.length = 0;
		this.array = new Array(this._capacity);
	}

	add (value) {
		if (this.length === this._capacity) {
			this._resize(this._capacity * 2);
			}
		this.array[this.length] = value;
		this.length++;
	}

  	get(value) {
		if (value < 0 || value >= this.length) {
      			throw new Error("index out of range");
		}
	   	return this.array[value];
	}

  	set(i, value) {
    		if (i < 0 || i >= this.length) {
      			throw new Error("index out of range");
		}
		this.array[i] = value;
		return true;
  	}

  	size() {
    		return this.length;
  	}

  	capacity() {
    		return this._capacity;
  	}

  	_resize(newCapacity) {
    		const newlyCreatedArray = new Array(newCapacity);
    		for (let i = 0; i < this.length; i++) {
      			newlyCreatedArray[i] = this.array[i];
    		}
    		this.array = newlyCreatedArray;
    		this._capacity = newCapacity;
  	}
}
