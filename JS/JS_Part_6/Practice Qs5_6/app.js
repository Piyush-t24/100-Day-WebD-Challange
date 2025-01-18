// Qs. Create a Function that returns the sum of numbers from 1 to n.

function getSum(n){
    let sum= 0;
    for (let i=1 ;i<=n; i++){
        sum = sum +i;
    }
    return sum;
}
console.log(getSum(10));
console.log(getSum(100));
console.log(getSum(1000));
console.log(getSum(10000));

// Qs. Create a Function that returns the concatenation off all strings in an array.

let str = ["hi", "hello", "bye","!"];
function concat(str){
    let result = "";

    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str));