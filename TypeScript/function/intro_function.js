// ! Function Declaration:
// ! Function Invocation:
// Greeting Function
// function greet(name:string, id:number){
//     console.log(`Welcome, ${name} and your id is ${id}`);
// }
// greet("piyush", 1);
// We can also do it by arrow function
// * This is also known as FAT Arrow function
var greet = function (name, id) {
    console.log("Welcome, ".concat(name, " and your id is ").concat(id));
};
greet("piyush", 1);
// ! Function return: How do you specify the return type of a function in TypeScript?
// * To specify the return type of a function, you can use the colon (:) followed by the desired type after the function's parameter list.
var greet1 = function (name, id) {
    return "Welcome, ".concat(name, " and your id is ").concat(id);
};
var myGreet = greet1("piyush", 1);
console.log(myGreet);
// todo practice time
// ? Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("12321"));
