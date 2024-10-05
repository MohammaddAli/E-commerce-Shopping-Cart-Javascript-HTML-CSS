// if (localStorage.getItem("User")) {
//   let userName = JSON.parse(localStorage.getItem("User").userName);
// }

let form = document.querySelector(".login-form");
let userName = document.querySelector("#user");
let Password = document.querySelector("#pass");
let submit = document.querySelector("#sign-up");
console.log(JSON.parse(localStorage.getItem("User")).userName);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    userName.value === JSON.parse(localStorage.getItem("User")).userName &&
    Password.value === JSON.parse(localStorage.getItem("User")).password
  ) {
    window.location = "index.html";
  } else {
    window.alert("please enter valid data");
  }
});
