// JSON Parse
let jsonRes = '{"fact":"A cat will tremble or shiver when it is extreme pain.","length":53}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

// JSON Stringify
let student = {
    name: "piyush",
    marks: 95
};
console.log(JSON.stringify(student));