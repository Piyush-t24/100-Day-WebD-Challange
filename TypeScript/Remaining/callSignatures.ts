//* The function call signature refers to the declaration or drfinition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementation or body.

//? lets add one function inside the object. It's more like creating a method in object

//? Very Important => call signature are typically used inside object type notations to describe the shape of functions within objects types.

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; //method call signature
};

const student1: Student = {
  name: "Piyush",
  age: 20,
  greet: (country) =>
    `Welcome My name is ${student1.name} , I am ${student1.age}yrs old & I am from ${country}`,
};
const student2: Student = {
  name: "Karan",
  age: 20,
  greet: (country) =>
    `Welcome My name is ${student2.name} , I am ${student2.age}yrs old & I am from ${country}`,
};

const intro = (student1: Student) => {
  const { name, age } = student1;
  return `Welcome My name is ${name} , I am ${age}yrs old`;
};
console.log(intro(student1));
console.log(student1.greet("India"));
console.log(student2.greet("Nepal"));
