// Qs. Write an arrow function that returns the square of a number 'n'.
const square = (n) => n * n;

console.log(square(3));
console.log(square(7));


// Qs. Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval run");
},11000);
