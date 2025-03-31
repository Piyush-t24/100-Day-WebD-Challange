//* Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types.
// function logAndReturn(value: number | string | boolean) {
//   console.log(value);
//   return value;
// }
// const numberResult = logAndReturn(42);
// const stringResult = logAndReturn("Hello, Generics ");
// const booleanResult = logAndReturn(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);
function logAndReturn(value) {
    console.log(value);
    return value;
}
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Hello, Generics ");
var booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
//*Use of Generics (<T>): Allows the function to maintain the type of the argument throughout, reducing unnecessary unions (number | string).
