//* In Typescript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction of complex types
var person = {
    name: "Piyush Gupta",
    age: 20,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India",
    },
};
console.log(person.address.country);
var person3 = {
    name: "Piyush Gupta",
    age: 20,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India",
    },
};
console.log(person3.address.country);
var product = {
    name: "laptop",
    price: 1000,
    quantity: 5,
};
//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns hte total price (price * quantity) of the product.
var calculateTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product));
