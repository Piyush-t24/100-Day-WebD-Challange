// * Map & Filter Method in Array in TS

const numbers: number[] = [1, 2, 3, 4, 5];

//! Map Method
//* The map method creates a new array by applying a provided function to each element of the original array.It transforms each element and returns a new array with the transformed values.

// ? 1: Doubling each number

const doubleData: number[] = numbers.map((curVal: number) => curVal * 2);
console.log(numbers);
console.log(doubleData);

// ? 2: Converting numbers to strings

const numberToString: string[] = numbers.map((curElm: number) =>
  curElm.toString()
);
console.log(numberToString);

//! Filter Method
// ? 1: Filtering even numbers

const evenNumbers: number[] = numbers.filter(
  (curElm: number) => curElm % 2 === 0
);
console.log(evenNumbers);

// ? 2: Filtering numbers greater than 3

const greaterThanThree: number[] = numbers.filter(
  (curElm: number) => curElm > 3
);
console.log(greaterThanThree);
