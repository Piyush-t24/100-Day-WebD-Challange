// Qs. Create a Function that gives us the average of 3 numbers.

function calcAvg(a,b,c){
    console.log((a+b+c)/3);
}
calcAvg(4,8,6);


// Qs. Create a Function that prints the multiplication table of a number.

function multiTable(n){
    for(let i=n; i<=n*10; i=i+n){
        console.log(i);
    }
}
multiTable(12);