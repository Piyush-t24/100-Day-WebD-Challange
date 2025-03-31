//* In Typescript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction of complex types

//* To define a type alias , you use the type keyword followed  by the alias name and the type definition:

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  class?: string; //optional
  address: { city: string; country: string };
};

const person: Person = {
  name: "Piyush Gupta",
  age: 20,
  isStudent: true,
  address: {
    city: "Pune",
    country: "India",
  },
};
console.log(person.address.country);

const person3: Person = {
  name: "Piyush Gupta",
  age: 20,
  isStudent: true,
  address: {
    city: "Pune",
    country: "India",
  },
};
console.log(person3.address.country);

// todo Create  a product Objects:
//? Define an interface or type representing a product with properties for name, price , and quantity. Create a product object with the following data:
// Name: "Laptop"
// Price: 1000
// Quantity: 5

type Product =  {
  name: string;
  price: number;
  quantity: number;
} 

const product:Product= {
  name: "laptop",
  price: 1000,
  quantity: 5,
};

//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns hte total price (price * quantity) of the product.

const calculateTotalPrice =(product:Product)=>{
    return product.price * product.quantity;
}
console.log(calculateTotalPrice(product));