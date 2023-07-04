const DynamicArrays = function (capacity = 1) {
  let arr = new Array(capacity);
  let arrLength = 0;
  let currentCapacity = capacity;

  const size = function () {
    return arrLength;
  };

  const get = function (arrIndex) {
    if (arrIndex < 0 || arrIndex >= arrLength) {
      throw new Error("Index out of bounds");
    }
    return arr[arrIndex];
  };
  const set = function (arrIndex, value) {
    if (arrIndex < 0 || arrIndex >= arrLength) {
      throw new Error("Index out of bounds");
    }

    arr[arrIndex] = value;
  };

  const add = function (num) {
    if (arrLength + 1 >= currentCapacity) {
      if (currentCapacity === 0) currentCapacity = 1;
      else currentCapacity *= 2;
      const newArr = new Array(currentCapacity);
      for (let i = 0; i < arrLength; i++) {
        newArr[i] = arr[i];
      }
      arr = newArr;
    }
    arr[arrLength++] = num;
  };
  const getCapacity = function () {
    return currentCapacity;
  };
  return {
    size: size,
    get: get,
    set: set,
    add: add,
    capacity: getCapacity,
  };
};

const DynamicArray = DynamicArrays();
console.log(DynamicArray.size());
DynamicArray.add(1);
console.log(DynamicArray.size());
DynamicArray.add(2);
console.log(DynamicArray.size()); // Output: 2

console.log(DynamicArray.get(1)); // Output: 2
DynamicArray.set(1, 200);
console.log(DynamicArray.get(1)); // Output: 200
DynamicArray.add(40);
console.log(DynamicArray.size());
DynamicArray.add(3);
DynamicArray.add(40);
DynamicArray.add(40);
DynamicArray.add(40);
DynamicArray.add(40);
DynamicArray.add(40);
console.log(DynamicArray.capacity());

//Example 2
/*
Find Numbers with Even Number of Digits. Given an array nums of integers, return how many of them contain an even number of digits.. Input: nums = [12,345,2,6,7896]
Output: 2
*/

function evenDigits(nums) {
  let countNum = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const evenDigit = getEvenDigits(num);
    if (evenDigit % 2 === 0) {
      countNum++;
    }
  }
  return countNum;
}

function getEvenDigits(num) {
  let countNum = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    countNum++;
  }
  console.log(countNum);
  return countNum;
}

const nums = [12, 345, 2, 6, 7896];
const evenDigitCount = evenDigits(nums);
console.log(evenDigitCount);

// EXAMPLE 3
/*
 Squares of a Sorted Array. Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]. Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

function sortedSquares(nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = right;

  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }

  return result;
}

const num = [-4, -1, 0, 3, 10];
const squaredSortedArr = sortedSquares(num);
console.log(squaredSortedArr);
