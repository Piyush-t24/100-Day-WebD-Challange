let data = {
    email: "ironman@gmail.com",
    password: "abcd",
};
console.log(data);
let dataCopy = {...data, id:123};
console.log(dataCopy);

// We can also spread string and arrays

let arr = [1,2,3,4,5];  //val
let obj1 = {...arr};    //obj -> key:val
console.log(obj1);