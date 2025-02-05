let url = "https://catfact.ninja/fact";

fetch(url) //It return a promise basically
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch(url);
  })
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((err) => {
    console.log("Error -", err);
  });
