//* ___________________________________________
//* Boolean Type
//* ___________________________________________
// ? In TypeScript , the boolean type represents a value that can be either true or false. It is one of the basic primitive types in the language.

let isMyNamePiyush: boolean = true;
let isDone: boolean = true;
let hasStarted: boolean = false;

// hasStarted = "yes" //invalid

// !Question: Check Even Number

function isEven(a: number): boolean {
  //   if (a % 2 == 0) {
  //     return true;
  //   }else{
  //     return false;
  //   }
  return a % 2 === 0;
}
console.log(isEven(5));

// !Question: Divisible by both 4 and 8.

function isDivisibleBy4And8(a: number): boolean {
  return (a % 4 == 0 && a % 8 == 0);
}
console.log(isDivisibleBy4And8(32));



//* ___________________________________________
//* BigInt Type
//* ___________________________________________

// ? It is a built-in type that allows you to work with numbers that are larger than the range supported by the regular number type.
// ? BigInt literals are written by appending the n  suffix to an integer literal.
// ? In JS we can't read the whole number beyond 2 raise to power 53

// let maxNumber= Number.MAX_SAFE_INTEGER;
let bigNumber:bigint =9007199254740991n;
console.log(bigNumber);

let anotherBigNumber = BigInt("90071992547409925");
console.log(anotherBigNumber);