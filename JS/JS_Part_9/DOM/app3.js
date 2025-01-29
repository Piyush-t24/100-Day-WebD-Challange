// Manipulating Attributes

let img = document.querySelector("img");
console.log(img);

// Manipulating Style

let links = document.querySelectorAll('.box a');
for(let i=0; i<links.length; i++){
    links[i].style .color = "yellow";
};

for(link of links){
    links.style.color = "yellow";
};
