// ! Function Declaration:

// ! Function Invocation:

// Greeting Function
// function greet(name:string, id:number){
//     console.log(`Welcome, ${name} and your id is ${id}`);
// }

// greet("piyush", 1);

// We can also do it by arrow function
// * This is also known as FAT Arrow function

const greet = (name: string, id: number) => {
  console.log(`Welcome, ${name} and your id is ${id}`);
};

greet("piyush", 1);

// ! Function return: How do you specify the return type of a function in TypeScript?
// * To specify the return type of a function, you can use the colon (:) followed by the desired type after the function's parameter list.

const greet1 = (name: string, id: number): string => {
  return `Welcome, ${name} and your id is ${id}`;
};

const myGreet = greet1("piyush", 1);
console.log(myGreet);

// todo practice time
// ? Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

const isPalindrome = (palin: string):boolean => {
  let myPalin = palin.split("").reverse().join("");
  return myPalin === palin;
};

console.log(isPalindrome("12321"));
