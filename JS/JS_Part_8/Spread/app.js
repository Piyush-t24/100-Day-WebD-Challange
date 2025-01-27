console.log(Math.min(1,2,3));


console.log(Math.min(1,2,3,2,3,0,4,2,1,3));

let arr = [1, 2, 3, 2, 3, 0, 4, 2, 1, 3];
console.log(Math.min(...arr));              //Spread
arr.push(-1);
console.log(Math.min(...arr));      

console.log(arr);
console.log(...arr);

console.log("apnacollege");
console.log(..."apnacollege");
