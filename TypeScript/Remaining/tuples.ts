// Tuples in Typescript
// * In TypeScript , tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key differene: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.
// ! Number of elements are fixed already
// ? Real-life example of using tuple in TypeScript:
// ? Let's consider a scenario where you want to represent a person's basic information, including their name, age , and whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a specific order and type.

// const favCity = ["nepal", "india", "bangladesh", true, "pakistan", 55];

// Defining a tuple type for person information
type PersonInfo = readonly[string, number, boolean];

// Function to display person information
const displayPersonInfo = (person: PersonInfo): void => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`);
}

// Example usage
const person4: PersonInfo = ["piyush", 20, true];
const person5: PersonInfo = ["karan", 21, false];

displayPersonInfo(person4);
displayPersonInfo(person5);


//! Question 1:
// ?You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.


// Defining a tuple type for product information
type ProductInfo = readonly[string, number, number];

// Function to display product information
const displayProductInfo = (product: ProductInfo): void => {
    const [name, price, quantity] = product;
    console.log(`Product: ${name}, Price: $${price.toFixed(2)}, Stock: ${quantity} units`);
}

// Creating product instances
const product1: ProductInfo = ["Laptop", 799.99, 15];
const product2: ProductInfo = ["Smartphone", 499.49, 30];

// Displaying product information
displayProductInfo(product1);
displayProductInfo(product2);


//! Question 2:
// ?You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

// Defining a tuple type for subject and grade
type SubjectGrade = readonly[string, number];

// Array to store subject grades
const studentGrades: SubjectGrade[] = [
    ["Math", 85],
    ["English", 90],
    ["Science", 78]
];

// Function to calculate the average grade
const calculateAverageGrade = (grades: SubjectGrade[]): number => {
    const total = grades.reduce((sum, [, grade]) => sum + grade, 0);
    return total / grades.length;
}

// Displaying subject grades
studentGrades.forEach(([subject, grade]) => {
    console.log(`Subject: ${subject}, Grade: ${grade}`);
});

// Calculating and displaying average grade
const averageGrade = calculateAverageGrade(studentGrades);
console.log(`Average Grade: ${averageGrade.toFixed(2)}`);



//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.
