//? Union types allow you to specify that a variable can hold values of multiple
// types. You use the | (pipe) symbol to define a union type.In

// *In TypeScript, when using a union type, it is essential to ensure that at least
// one of the types in the union includes all the required properties. Failure to do so
// will result in a type error during compilation.

const inputValue = (value: string | number | boolean) => {};

inputValue(55);
inputValue("hello world");
inputValue(true);

/* Practice, we'll create a function that can accept different types of arguments
and perform different actions based on the type of the input. Suppose we want to
create a function that doubles the value if the input is a number, or converts the 
input to uppercase if it's a string. To achieve this, we can use a union type to
allow the function to accept both numbers and strings.
*/

// define
const userInput = (value: string | number): string | number => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    throw new Error("Invalid input data");
  }
};

// function call
console.log(userInput(10));
console.log(userInput("subscribe"));

// todo HOMEWORK TIME
// ?we want to create a function that formats the value passed to it in a specific way based on its type:
// ? If the input is a number, it should add a dollar sign and format it with two decimal places.
// ? If the input is a boolean, it should return "Yes" for true and "No" for false.
// ? If the input is a string, it should capitalize the first letter.

//! Intersection types allow you to combine multiple types into a single type. You use
// the & (ampersand) symbol to define an intersection type.

type Person1 = {
  name: string;
  age: number;
};

type Employee = {
  emp_id: number;
  department: string;
};

type EmployeeDetails = Person1 & Employee;

const employee: EmployeeDetails = {
  name: "piyush",
  age: 20,
  emp_id: 1111,
  department: "IT",
};

const myPersonalInfo: Person1 = {
  name: "piyush",
  age: 20,
};

//* Practice: Create User Profile
// You are given two TypeScript types: User and MyLocation. The User type represents
// basic user information, while the MyLocation type contains details about the user's
// location. Create a function called createUserProfile that takes a User object and a
// MyLocation object as arguments and prints the user's name and the city they are from.

type User = {
  name: string;
  age: number;
};

type MyLocation = {
  city: string;
  country: string;
};

const user: User = { name: "piyush", age: 20 };
const myLocation: MyLocation = { city: "Amethi", country: "India" };

// defined
const createUserProfile = (user: User, location: MyLocation) => {
  // return `my name is ${user.name} and I am living in city: ${location.city}`
  return { ...user, ...location };
};

// call
const myCompleteInfo: User & MyLocation = createUserProfile(user, myLocation);
console.log(myCompleteInfo);

// todo Combine User and Account Data

// todo You are building a user management system, and you have two TypeScript types:

// ? User: Represents basic user information, with the following properties:

// ? id (number): The user's unique identifier.

// name (string): The user's name.
// email (string): The user's email address.

// ? Account: Contains details about the user's account, with the following properties:
// accountId (number): The account's unique identifier.
// accountType (string): The type of the account (e.g., "Savings," "Checking," etc.).
// balance (number): The account balance.

/* Your task is to create a function called combineUserAndAccount that takes a User 
object and an Account object as arguments and returns a new object representing the 
combined information of the user and their account.

Ensure that the resulting object contains all the properties from both User and 
Account types.*/
