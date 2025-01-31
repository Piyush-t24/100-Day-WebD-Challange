let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("form submitted");
// });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.dir(form);


  let user = this.elements[0];
  let pass = this.elements[1];

  // let user = document.querySelector("#user");
  // let pass = document.querySelector("#pass");
  console.log(user.value);
  console.log(pass.value);

  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});