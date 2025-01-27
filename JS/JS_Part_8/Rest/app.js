function sum(...args){                   //arguments
    for( let i=0; i<args.length; i++){
        console.log("you gave us : ", args[i]);
    }
};
console.log(sum(1,2,3));


function min (a,b,c,d){
    console.log(arguments);
}
console.log(min(1,2,3,4));

function sum(...args) {
    return args.reduce((sum, el) => sum + el);         //This single line will not work bcoz,  arguments is not an array.
}
console.log(sum(1,2,3,4,5));

function min(...args){
    return args.reduce((min, el) =>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}
console.log(min(12,445,123,-20));

// Ham aur bhi parameters ko input le skte hai

function min(msg,...args) {
    console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}
console.log(min("hello",12, 445, 123, -20));