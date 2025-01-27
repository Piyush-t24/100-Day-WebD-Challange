const student = {
    name: "karan",
    class: 9,
    age: 14,
    subjects: ["hindi","english","math","science","social studies"],
    username: "karan123",
    password: 1234,
};

// let username = student.username;
// let password = student.password;
// console.log(username);
// console.log(password);

// Compact banane ke liye ham destructuring use karenge

const { username: user, password:pass} = student;
console.log(user);