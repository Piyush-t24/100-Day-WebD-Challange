let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
  console.dir(smallImages[i]);
  console.dir(smallImages[i].src);
}

// Query Selector
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));       //first ancer tag aa jayega


console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll("div a"));

