"use strict";
// * Type inference in TypeScript refer to the ability of the TypeScript compiler to automatically determine and assign types to variables, expessions, and function return values based on their usage and context in the code.
let myName = "piyush";
let myfavNum1 = 1234565;
// myfavNum1= true;
let firstName1 = "piyush"; // The compiler infers the type string for the variable name.
let age = 25; // The compiler infers the type number for the variable age.
let isValid = true; // The compiler infers the type boolean for the variable isValid.
// todo 👉 What are some best practices for using type inferance in Typescript?
// ? Use type inference for simple cases where the assigned value clearly indicates thr intended type.
// ? When in doubt , provide explicit type annotation to make your intentions clear.
// ? Avoid relying too heavily on type inference where the assigned value is complex or ambih=guous.
// ? Regularly review and refactor your code to ensure the inferred types align with your intentions.
