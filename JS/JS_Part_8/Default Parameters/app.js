function sum (a,b =3){
    return a+b;
}
console.log(sum(2));        //5
console.log(sum(2,8));      //10


// This type of implementation is wrong in JS
function summ(a=2, b){
    return a+ b;
}
console.log(summ(1,3));       //4
console.log(summ(1));         //a=1, b=undefined.


// Starting me default parameters ko nhi likhte...