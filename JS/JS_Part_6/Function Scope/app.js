let sum = 54;            //Global Scope

function calSum(a, b){
    let sum = a+b;       //Function Scope
    console.log(sum);
}
calSum(1,2);


// When global and function variables fights then Function Scope always wins, because it is more specific.
// Function ke andar global scope wale variables use kar sakte hai agar khud ke pas koi variable nhi hai toh

let sums = 54; //Global Scope

function calSums(a, b) {
//   let sums = a + b; //Function Scope
  console.log(sums);
}
calSums(1, 2);