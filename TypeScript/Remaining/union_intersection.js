//? Union types allow you to specify that a variable can hold values of multiple
// types. You use the | (pipe) symbol to define a union type.In
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// *In TypeScript, when using a union type, it is essential to ensure that at least
// one of the types in the union includes all the required properties. Failure to do so
// will result in a type error during compilation.
var inputValue = function (value) { };
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
var userInput = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid input data");
    }
};
// function call
console.log(userInput(10));
console.log(userInput("subscribe"));
var employee = {
    name: "piyush",
    age: 20,
    emp_id: 1111,
    department: "IT",
};
var myPersonalInfo = {
    name: "piyush",
    age: 20,
};
var user = { name: "piyush", age: 20 };
var myLocation = { city: "Amethi", country: "India" };
// defined
var createUserProfile = function (user, location) {
    // return `my name is ${user.name} and I am living in city: ${location.city}`
    return __assign(__assign({}, user), location);
};
// call
var myCompleteInfo = createUserProfile(user, myLocation);
console.log(myCompleteInfo);
// todo Homework Question By Thapa Technical: Combine User and Account Data
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
