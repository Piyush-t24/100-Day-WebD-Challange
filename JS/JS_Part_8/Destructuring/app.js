let names = ["tony", "bruce","steve","peter","abc","xyz","pqr"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = name[2];
let [winner, runnerup, secondRunnerup] = names;
console.log(winner, runnerup, secondRunnerup);       //"tony"  "bruce"  "steve"

let [winner1, runnerup1, ...others] = names;     //Baki ke bachi hui jitni bhi chije hai sabko store kr lega
console.log(winner1, runnerup1, ...others); 