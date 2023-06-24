const { DynamicArray } = require("./Class");
array = new DynamicArray();

console.log("Default size and capacity");
console.log(array.size());
console.log(array.capacity);

console.log("add 1");
array.add(1);
console.log(array.size());
console.log(array.capacity);

console.log("add 2");
array.add(2);
console.log(array.size());
console.log(array.capacity);

console.log("add 3");
array.add(3);
console.log(array.size());
console.log(array.capacity);

console.log("add 4");
array.add(4);
console.log(array.size());
console.log(array.capacity);

console.log("add 5");
array.add(5);
console.log(array.size());
console.log(array.capacity);

console.log("get 1");
console.log(array.get(1));

console.log("set 1, 200");
array.set(1, 200);

console.log("get 1");
console.log(array.get(1));

console.log("get 7");
console.log(array.get(7));

console.log("set 8,40");
array.set(8, 40);
