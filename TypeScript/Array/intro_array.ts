// ! Array in TS

// * In typescript , an array is a data type that can store multiple values of different data types sequentially

// ? In TypeScript , you can create and initialize  arrays using various approaaches
// a) Using square brackets:

const number: number[] = [1, 2, 3, 4, 5, 6];

// b) Using the Array constructor:

const number1: number[] = new Array(1, 2, 3, 4, 5, 6);

// c) Using the Array.of method:

const names:string[] = Array.of("piyush", "karan", "aman");

// Operation: Accessing elements using index:

console.log(names[1]);

console.log(names.length);
