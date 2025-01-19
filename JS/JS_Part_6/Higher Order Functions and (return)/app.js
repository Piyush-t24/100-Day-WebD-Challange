function multipleGreet(func, n){        //Higher Order Function
    for(let i=1; i<=n; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}

multipleGreet(greet, 10);

multipleGreet(function(){console.log("namaste")}, 10);

// Return a function 

function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if (request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else {
        console.log("wrong request");
    }
}
let request= "odd";
let fun =  oddEvenTest(request);
console.log(fun);