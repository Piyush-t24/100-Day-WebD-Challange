// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };
//   return person;
// }

// Constructors- doesn't returns anything and start with capital
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.talk = function () {
  console.log(`Hi, my name is ${this.name}`);
};
let p1 = new Person ("adam", 25);
let p2 = new Person ("eve", 25);

// let p1 = PersonMaker("piyush", 19);   //Talk function ki alag se ek copy bani hai
// let p2 = PersonMaker("karan", 22);    //Aur isme bhi talk ki ek alag copy bani hai
// let p3 = PersonMaker("aman", 31);     //same
