let arr = ['a','b','c'];
let arrCopy = arr;
console.log(arr == arrCopy);
console.log(arr === arrCopy);
arr.push('d');
console.log(arr);
console.log(arrCopy);
arr.pop();
console.log(arr);
console.log(arrCopy);

//If we dont want to reflect changes on another

// let arr = ['a','b','c'];             //New value means new address.
// let arrCopy = ['a','b','c'];
// arr.push('d');
// console.log(arr);
// console.log(arrCopy);

