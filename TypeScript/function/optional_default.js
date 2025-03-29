// ? Optional and Default Parameters:
// * TypeScript allows you to define optional and default parameters in functions.
// * Optional parameters are denoted by appending a ? symbol after the parameter name.
// * and default parameters are specified by providing a default value in the parameter declaration.
// const greet3 = (name:string, id:number=1):string => {
//     return `Welcome, ${name} and your id is ${id}`
// }
var greet3 = function (name, id) {
    if (id) {
        return "Welcome, ".concat(name, " and your id is ").concat(id);
    }
    else {
        return "Welcome, ".concat(name);
    }
};
var emp = greet3("piyush");
var emp2 = greet3("piyush", 2);
console.log(emp);
console.log(emp2);
