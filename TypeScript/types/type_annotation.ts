let myFavNum: number = 10;
let myFullName: string = "piyush gupta";

console.log(myFavNum.toString());

// let sum1= myFavNum + 10;
// console.log(sum1);


//* ___________________________________________
//* Number Type
//* ___________________________________________
// ? The number type represents numeric values,including and floating-point number

let myFavNumb:number = 5;
let myAge:number = 29;
let pi:number = 3.147;
let myNegVal:number = -5;

// let invalidResult: number = myAge + "years";

// let invalidValue: number = "123";            //passing string

let computesValue: number = Math.sqrt(16);
console.log(computesValue);

let nanValue : number = NaN;

//* ___________________________________________
//* String Type
//* ___________________________________________

// * Any value under single of double quotes are treated as string, Also any exp, result string as output

let myFullNames = "piyush gupta";
let myFirstName = "piyush";
let myLastName  = 'gupta';

myFullNames = myFirstName + myLastName;
console.log(myFullNames);

// ! Here are some practice questions related to string type in TypeScript:

// todo 👉 String Initialization:
// ? Declare a variable message of type string and assign it the value "Hello Typescript!".

let message:string = "Hello Typescript!";


// todo 👉 Concatenation:
// ? Create two variables firstName and lastName of type string and assisn your first name and last name , respectively. Concatenate the two variables to store the result in a variable called fullName.

let firstName:string ="piyush";
let lastName:string ="gupta";

myFullName= firstName + lastName ;
console.log(myFullName);

// todo 👉 String Length:

let sentence:string = "please piyush, complete TS before end of this month"; 
console.log(sentence.length);

// todo 👉 
// all are easy, you can do........................................