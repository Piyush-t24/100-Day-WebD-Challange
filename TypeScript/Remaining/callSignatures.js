//* The function call signature refers to the declaration or drfinition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementation or body.
var student1 = {
    name: "Piyush",
    age: 20,
    greet: function (country) {
        return "Welcome My name is ".concat(student1.name, " , I am ").concat(student1.age, "yrs old & I am from ").concat(country);
    },
};
var student2 = {
    name: "Karan",
    age: 20,
    greet: function (country) {
        return "Welcome My name is ".concat(student2.name, " , I am ").concat(student2.age, "yrs old & I am from ").concat(country);
    },
};
var intro = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome My name is ".concat(name, " , I am ").concat(age, "yrs old");
};
console.log(intro(student1));
console.log(student1.greet("India"));
console.log(student2.greet("Nepal"));
