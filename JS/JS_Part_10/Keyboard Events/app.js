let inp = document.querySelector("input");


inp.addEventListener("keydown", function(event){
    console.log("key = ",event.key);
    console.log("code = ",event.code);
    console.log("key was pressed");
});


// inp.addEventListener("keyup", function(){
//     console.log("key was released");
// });
