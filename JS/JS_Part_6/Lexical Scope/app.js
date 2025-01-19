// A variable defined outside a function can be accessible inside another function defined after the variable declaration
// The opposite is NOT true

// For Nested function

function outerFunc() {
  let x = 5;
  let y = 6;
  function innerFunc() {
    console.log(x);
    console.log(y);
  }

  innerFunc();
}
console.log(outerFunc());

function outerFunc() {
  function innerFunc() {
    console.log(x);
    console.log(y);
  }
  let x = 5;
  let y = 6;

  innerFunc();
}
console.log(outerFunc());

// Variable define hone ke phle hi function use kar rha,    this is due to
// Hoisting

// Opposite is not true

// function outerFunc() {
//   function innerFunc() {
//     let a = 10;
//     console.log(x);
//     console.log(y);
//   }
//   let x = 5;
//   let y = 6;
//   console.log(a);          //This is not possible
//   innerFunc();
// }
// console.log(outerFunc());


