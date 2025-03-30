"use strict";
//* ___________________________________________
//* Any Type
//* ___________________________________________
// ? The any type is the most flexible type in TypeScript. It essentially turns off all type checking for the variables or expressions it is applied to.
// ? you will see any type when u first write the code
let myfavNum = 5;
myfavNum = "vinod";
myfavNum = true;
// ! useCases
// * Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, network responses, or deserialized JSON objects, the any type can be useful.
// * Migration from JavaScript: When migrating an existing JavaScript codebase to TypeScript, using the any can be a convenient way to quickly annotate variables and functions without immediately specifying their precise type.
//* ___________________________________________
//* Unknown Type
//* ___________________________________________
// ? The unknown type is a safer alternative to any because it still enforces type checking and type safety.
// ? Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.
let num2;
num2 = 5;
num2 = "piyush";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
// * Other Example of unknown
// async function fetchData(): Promise<unknown>{
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
// }
// async function processData() {
//     const response = await fetchData();
//     if(typeof response === 'object'){
//         // perform operations on the response object
//     }
// }
