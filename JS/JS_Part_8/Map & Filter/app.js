// Map Function

let num = [1,2,3,4];

let double = num.map((el) => {
    return el * 2;
    // return el * el;
});
console.log(double);


// ---------------------------------------------------


let student = [
    {
        name:"piyush",
        marks: 95,
    },
    {
        name:"aman",
        marks: 88,
    },
    {
        name:"karan",
        marks: 92,
    },
];

let gpa = student.map((el) =>{
    return el.marks/10;
});
console.log(gpa);

//  Filter Function

let nums = [1,2,3,4,7,8,2,9,10,12,11];
let ans = nums.filter((el) => {
    return el%2==0;             //even -> true, odd -> false
    // return el%2 != 0;        //For odd.
});
console.log(ans);

