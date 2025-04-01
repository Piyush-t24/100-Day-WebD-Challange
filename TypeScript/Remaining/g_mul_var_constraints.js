// IMP: When we use generic and non-generic types together, we need to define the types explicitly while calling the function. However, for non-generic functions, we don't need to.
// Function overload examples
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//     return a + b;
// }
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
var result1 = add(5, "thapa", true);
var result2 = add("Hello, ", 5, false);
var addTwo = function (num1, num2) {
    return num1 + num2;
};
console.log(addTwo(5, 10));
