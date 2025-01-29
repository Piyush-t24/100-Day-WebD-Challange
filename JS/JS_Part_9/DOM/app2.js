// Setting content in objects
let para = document.querySelector("p");
console.dir(para);
console.dir(para.innerText);
console.dir(para.innerHTML);
console.dir(para.textContent);

let heading = document.querySelector("h1");
console.dir(heading);
console.dir(heading.innerText);
heading.innerHTML = "<u>Spider Man</u>";

heading.innerHTML = `<u> ${heading.innerText} </u>`;
