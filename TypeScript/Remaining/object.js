//* In TypeScript , objects are used to represent data with key-value pairs.Each key in the object is a string (or a symbol in ES6) that maps to a value.
// ? Let's consider a real life example of representing a person's information using Typescript objects
// ? ->  name, age, isStudent, address{city, country}
var person = {
    name: "Piyush Gupta",
    age: 20,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India",
    },
};
// Todo Accessing the object data
console.log(person.address.country);
// Todo Updating object properties
person.address.country = "Nepal";
console.log(person.address.country);
