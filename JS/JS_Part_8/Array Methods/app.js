let arr = [1,2,3,4,5];

arr.forEach((el) => {
    console.log(el);
});


arr.forEach(function(el){
    console.log(el);
});

let print = function(el){
    console.log(el);
};
arr.forEach(print);


// forEach function can be used for object also...

let arrr = [{
    name: "piyush",
    marks: 95,
},
{
    name: "aman",
    marks: 88,
},
{
    name: "karan",
    marks: 92,
}];

arrr.forEach((student) => {
    console.log(student.marks);
});