function sum(a, b) {
  return a + b;
}
let s = sum(23, 567);
console.log(s);

// or

console.log(sum(23, 567));

console.log(sum(sum(1, 2), 3));


function isAdult(age){
    if(age>=18){
        return "adult";
    }else{
        return "not adult";
    }
}
 console.log(isAdult(22));
