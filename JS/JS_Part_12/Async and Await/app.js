async function greet() {
  // throw "404 page not found";
  return "hello!"; //return a promise
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err: ", err);
  });

  let demo = async()=> {
    return 5;
  } ;

// Await Keyword

function getNum(){
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      let num = Math.floor(Math.random()*10)+1;
      console.log(num);
      resolve();
    }, 1000);
  });
}
async function demo() {
  await getNum();
  await getNum();
  await getNum();
}

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

async function demo() {
  await changeColor("violet", 1000);
  await changeColor("indigo", 1000);
  await changeColor("green", 1000);
  await changeColor("yellow", 1000);
  await changeColor("orange", 1000);

  return "done";
}
