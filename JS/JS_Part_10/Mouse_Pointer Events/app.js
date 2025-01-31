let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function(){
    console.log("button was clicked");
    alert("button was clicked ")
};

// OR

function sayHello(){
    alert("Hello!");
}
btn.onclick = sayHello;



// To select all buttons.
let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onclick =  sayHello;
    btn.onmouseenter = function (){
        console.log("you entered a button");
    }
}
function sayHello() {
  alert("Hello!");
}

// On Mouse Enter property


