// * Arrays in TypeScript come with built-in methods that allow you to perform common operations
var fruits = ["apple", "banana", "orange", "mango"];
// a) Adding elements to an array using push:
var newUpdatedFruits = fruits.push("kiwi");
console.log(newUpdatedFruits);
console.log(fruits);
// b) Removing elements from an array using pop:
var lastData = fruits.pop();
console.log(lastData);
console.log(fruits);
// ! Iterating over elements:
// ? You can iterate over the elements of an array yusing various looping constructs such as for , for ...of , or array methods like forEach
// Using for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Using for...of loop
var arr = [1, 2, 3, 4];
// * for...in loop (iterates over indices)
// *for (const index in arr){
// *console.log(index);                       //Output: 0,1,2,3}
// * for...of loop (iterates over values)
// *for (const value of arr){
// *console.log(value);                       //Output: 1,2,3,4}
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// Using forEach method
fruits.forEach(function (curVal) {
    console.log(curVal);
});
