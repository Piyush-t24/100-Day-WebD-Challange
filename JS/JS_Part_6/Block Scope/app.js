{
  let a = 25;
}
console.log(a);

// we cannot access a outside the block

for (let i = 1; i <= 5; i++) {
  console.log(i);                   //Block scope
}
console.log(i);


let age =25;
if(age>=18){
    let str = "adult";
    console.log(str);
}