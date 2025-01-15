//  for-of Loop

let fruits=["mango","apple","banana","orange","litchi"];

for(fruit of fruits){
    console.log(fruit);
}

for(char of "apnacollege"){
    console.log(char);
}

// Nested for-of Loop

let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder women", "flash"],
];

for(list of heroes){
    for(name of list){
        console.log(name);
    }
}