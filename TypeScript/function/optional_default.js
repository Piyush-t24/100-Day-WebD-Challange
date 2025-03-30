"use strict";
// ? Optional and Default Parameters:
// * TypeScript allows you to define optional and default parameters in functions.
// * Optional parameters are denoted by appending a ? symbol after the parameter name.
// * and default parameters are specified by providing a default value in the parameter declaration.
// const greet3 = (name:string, id:number=1):string => {
//     return `Welcome, ${name} and your id is ${id}`
// }
const greet3 = (name, id) => {
    if (id) {
        return `Welcome, ${name} and your id is ${id}`;
    }
    else {
        return `Welcome, ${name}`;
    }
};
const emp = greet3("piyush");
const emp2 = greet3("piyush", 2);
console.log(emp);
console.log(emp2);
