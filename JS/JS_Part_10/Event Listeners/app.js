let btns = document.querySelectorAll("button");

function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("Apna College");
}


for (btn of btns){
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked me");
    });
}
