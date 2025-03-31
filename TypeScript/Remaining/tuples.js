// Tuples in Typescript
// * In TypeScript , tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key differene: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.
// ! Number of elements are fixed already
// ? Real-life example of using tuple in TypeScript:
// ? Let's consider a scenario where you want to represent a person's basic information, including their name, age , and whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a specific order and type.
// Function to display person information
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driver's License: ").concat(hasDriverLicense ? "Yes" : "No"));
};
// Example usage
var person4 = ["piyush", 20, true];
var person5 = ["karan", 21, false];
displayPersonInfo(person4);
displayPersonInfo(person5);
//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:
// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.
//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:
// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.
//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:
// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.
