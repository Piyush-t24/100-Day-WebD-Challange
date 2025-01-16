const student = {
    name: "piyush",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};
console.log(student.city);
student.city = "Mumbai";
console.log(student.city);

student.gender = "Male";
console.log(student);


delete student.marks;
console.log(student);