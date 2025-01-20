let id= setInterval(() => {
    console.log("Apna College");
}, 2000);

console.log(id);
let id2= setInterval(() => {
    console.log("Hello world");
}, 3000);

console.log(id2);

clearInterval(id2);
clearInterval(id);