// QS. For the given start state of an array, change it to final form using splice

let month = ["january","july","march","august"];
// month.splice(0,2);
// month.splice(0,0,"july","june");
// console.log(month);

//or

// month.splice(0,1);
// month.splice(1, 0, "june");
// console.log(month);

//or

month.splice(0, 2, "july", "june");
console.log(month);

// Qs Return the index of the "javascript" from the given array, if it was reversed.

let lang = ["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang.reverse().indexOf("javascript"));

