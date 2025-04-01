// IMP: When we use generic and non-generic types together, we need to define the types explicitly while calling the function. However, for non-generic functions, we don't need to.

// Function overload examples
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//     return a + b;
// }

function add<T, U>(a: T, b: U, c: boolean) {
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
}

const result1 = add<number, string>(5, "thapa", true);
const result2 = add<string, number> ("Hello, ", 5, false);

const addTwo = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(addTwo(5, 10));
