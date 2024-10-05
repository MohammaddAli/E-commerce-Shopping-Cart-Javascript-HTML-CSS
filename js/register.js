let form = document.querySelector(".login-form");
let email = document.querySelector("#email");
let userName = document.querySelector("#user");
let Password = document.querySelector("#pass");
let submit = document.querySelector("#sign-up");


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value != "" || userName.value != "" || Password.value != "") {
    let user = { emil: email.value, userName: userName.value, password: Password.value };;
        window.localStorage.setItem("User", JSON.stringify(user));
        window.location = "login.html";
    }
    else {
        window.alert("please enter valid data");
    }
});



// let form = document.querySelector(".login-form");
// let email = document.querySelector("#email");
// let userName = document.querySelector("#user");
// let Password = document.querySelector("#pass");
// let submit = document.querySelector("#sign-up");

// let usersArr = JSON.parse(localStorage.getItem("Users")) || [];

// submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (email.value != "" || userName.value != "" || Password.value != "") {
//         usersArr.push({ emil: email.value, userName: userName.value, password: Password.value })
//         window.localStorage.setItem("Users", JSON.stringify(usersArr));
//         window.location = "login.html";
//     }
//     else {
//         window.alert("please enter valid data");
//     }
// });