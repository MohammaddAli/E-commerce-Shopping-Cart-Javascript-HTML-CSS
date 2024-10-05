const sign = document.querySelector(".sign ul");
let userName = JSON.parse(localStorage.getItem("User")).userName;
let products = document.querySelector(".products");
let productsArr = [
  {
    id: 1,
    img: "images/1.png",
    title: "Dark blue shirt",
    p: "Dark blue floral short sleeves shirt",
    size: "Sizes: Small - Medium",
    quantity: 1,
  },
  {
    id: 2,
    img: "images/2.png",
    title: "Black T-Shirt",
    p: "Black Organic Cotton V-Nick T-Shirt",
    size: "Sizes: Medium, large",
    quantity: 1,
  },
  {
    id: 3,
    img: "images/3.png",
    title: "Navy Blue Shorts",
    p: "Navy Blue Mid rise Shorts",
    size: "Sizes: Small, large",
    quantity: 1,
  },
  {
    id: 4,
    img: "images/4.png",
    title: "Blue Pants",
    p: "Blue Mid Rise Slim Fit Pants",
    size: "Sizes: large",
    quantity: 1,
  },
  {
    id: 5,
    img: "images/5.png",
    title: "Orange T-Shirt",
    p: "Orange Crew Neck T-Shirt",
    size: "Sizes: Small",
    quantity: 1,
  },
  {
    id: 6,
    img: "images/6.png",
    title: "Green Jacket",
    p: "Dark Green Curduroy Jacket",
    size: "Sizes: Medium",
    quantity: 1,
  },
];

// if(localStorage.getItem("User")){
//     sign.style.display = "none";
//    let usernameP = document.createElement("p");
//    usernameP.textContent = userName;
//    usernameP.style.cssText = "color: white; text-align: right; padding: 5px 0;";
//    console.log(usernameP);
// sign.parentElement.appendChild(usernameP);
// let cart = document.createElement("div")
// sign.parentElement.appendChild(cart);
// cart.innerHTML = `<div style="text-align: right" class="cart"><i class="fa-solid fa-cart-shopping"></i></div>`;
// let listDiv = document.createElement("div");
// listDiv.style.cssText = "width 15px; hight: 10px; background-color: red; color: white;"
// sign.parentElement.appendChild(listDiv);
// }

if (localStorage.getItem("User")) {
  sign.style.display = "none";
  sign.parentElement.innerHTML = `
  <div class="cart" style="display: flex; align-items: center; position: relative; justify-content: flex-end;"> 
      <p style="color: white; margin: 0px 30px; cursor: pointer;">${userName}</p>
      <div style="padding: 5px; cursor: pointer;" onclick="showProductsCart()" class="cart-div"><i class="fa-solid fa-cart-shopping"></i></div>
      <span class="badge"
          style="width: 20px; height: 20px; background-color: red; color: white ;border-radius: 50%; text-align: center; line-height: 20px; display: block;">0</span>
      <div class="listDiv "
          style="width: 150px; height: auto; padding: 10px; background-color: rgb(236, 80, 80); color: white; position: absolute; top: 20px; right: -55px; display:none;">
          
          <div class="view-all" style="background-color: blue; padding: 5px;"><a href="./cartProducts.html" style="color: black; text-decoration: none;">View All Prpducts</a>
      </div>
   </div>
   <div class="logout" style="margin-left: 20px; cursor: pointer;">Logout</div>

  `;
}



// let cartShopping = document.querySelector(".cart .cart-div");
// cartShopping.addEventListener((e)=>{

// })
let listDiv = document.querySelector(".cart div.listDiv");

let showProductsCart = () => {
  if (listDiv.style.display === "none") {
    listDiv.style.display = "block";
  } else {
    listDiv.style.display = "none";
  }
};

let htmlArr = productsArr.map((item) => {
  let { id, img, title, p, size, quantity } = item;
  return `<div class="product">
  <div class="img">
      <img src="${img}" alt="">
  </div>
  <div class="description">
      <div class="text">
          <h2>${title}</h2>
          <p>${p}</p>
          <p>${size}</p>
      </div>
      <div class="add-to-cart">
          <div onclick="addToList('${title}',${quantity})" class="btn">Add To Cart</div>
          <i class="fa-regular fa-heart"></i>
      </div>
  </div>
</div>
`;
});

products.innerHTML = htmlArr;
let header = document.querySelector(".row");
let c = document.querySelector(".cart");
c.addEventListener("click", (e) => {
  if (e.currentTarget.className === "cart") {
    console.log("hi");
  }
  console.log("hi2");
});

// let products = document.querySelectorAll(".products");
let product = document.querySelectorAll(".products .product");
let btn = document.querySelectorAll(".products .product .btn");
let badge = document.querySelector(".cart .badge");

// for(let i = 0; i < btn.length; i++){
//   btn[i].addEventListener("click", (e)=>{
//   console.log(btn[i].parentElement.previousElementSibling.firstElementChild.textContent);
//   })
// }
// function addToList(title) {
//   let allDivs = document.querySelectorAll(".listDiv div");
//   let x = document.querySelector(".listDiv span");
//   let ar = [""];
//   console.log(1);

//   if (allDivs[i].innerText === title) {
//     console.log("found");

//   for (let i = 0; i < allDivs.length; i++) {
//     if (allDivs[i].innerText === title) {
//       console.log("found");
//       ar.push(title);

//     }
//     x.innerText = ar.length;
//     // x.innerText++;
//       console.log(x.innerText);
//   }
// }else
//   listDiv.innerHTML += `<div>${title}</div><span>1</span>`;
//   badge.innerText++;

// }

// function addToList(title) {
//   let allDivs = document.querySelectorAll(".listDiv div");
//   let x = document.querySelector(".listDiv span");
//   let ar = [""];

// if(allDivs.length === 0){
//   listDiv.innerHTML += `<div>${title}</div><span>1</span>`;
//         badge.innerText++;
// }else if(allDivs.length > 0){
//   for (let i = 0; i < allDivs.length; i++) {
//     if(allDivs[i].innerText !== title)
//     if (allDivs[i].innerText === title)
//       ar.push(title);
//     }
//     if(ar.length >= 1){
//       badge.innerText++;
//       x.innerText = ar.length;
//     }

// }else{
//   listDiv.innerHTML += `<div>${title}</div><span>1</span>`;
//   badge.innerText++;
// } }

// let ar = [];
// let found = false;

// function addToList(title) {
//   let x = document.querySelector(".listDiv span");
//   let allDivs = document.querySelectorAll(".listDiv div");
//   if (ar.length === 0) {
//     listDiv.innerHTML += `<div>${title}</div><span>1</span>`;
//     badge.innerText++;
//   } else if (ar.length >= 1) {
//     for (let i = 0; i < ar.length; i++) {
//       if (ar[i] === title) found = true;
//     }
//     if (found) {
//       for (let i = 0; i < allDivs.length; i++) {
//         if (allDivs[i].innerText === title) {
//           badge.innerText++;
//           let y = document.querySelectorAll(".listDiv span");
//           y[i].innerText++;
//         }
//       }
//     } else {
//       listDiv.innerHTML += `<div>${title}</div><span>1</span>`;
//       badge.innerText++;
//     }
//   }
//   ar.push(title);
//   found = false;
// }
let listInStorage = JSON.parse(localStorage.getItem("chosenProducts")) || [];
// عشان هو متسجل في الLocal Storage في 
//property عبارة عن array
// فمفيش push لازم اضيف الpropery علي بعضها
let ar = JSON.parse(localStorage.getItem("chosenProducts")) || [];
let bageClicked = localStorage.getItem("clicked") || 0;

if (listInStorage) {
  //           الحمد لله
  listInStorage.forEach((ele) => {
    {
      listDiv.innerHTML += `<div>${ele.title} - ${ele.quantity}</div>`;
      badge.innerText = bageClicked;
    }
  });
}

function addToList(title, quantity) {
  let allDivs = document.querySelectorAll(".listDiv div");
  if (ar.length === 0) {
    listDiv.innerHTML += `<div>${title} - ${quantity}</div>`;
    badge.innerText++;
    bageClicked++;
    ar.push({ title: title, quantity: quantity });
  } else if (ar.length >= 1) {
    let found = ar.find((i) => {
      return i.title === title;
    });
    if (found) {
      found.quantity++;
      for (let i = 0; i < allDivs.length; i++) {
        if (allDivs[i].innerText.includes(`${title}`)) {
          allDivs[i].innerText = "";
        }
      }
      listDiv.innerHTML += `<div>${title} - ${found.quantity}</div>`;
      badge.innerText++;
      bageClicked++;
    } else {
      ar.push({ title: title, quantity: quantity });
      listDiv.innerHTML += `<div>${title} - ${quantity}</div>`;
      badge.innerText++;
      bageClicked++;
    }
  }
  window.localStorage.setItem("chosenProducts", JSON.stringify(ar));
  console.log("1", ar);
  window.localStorage.setItem("clicked", bageClicked);
}

console.log("2", ar);

let logout = document.querySelector(".logout");
logout.addEventListener("click", (e)=>{
  window.location = "./register.html";
window.localStorage.clear();
})
// localStorage.setItem("chosenProducts", JSON.stringify(ar));
// console.log(ar);

// let allDivs = document.querySelectorAll(".listDiv div");
// console.log(allDivs);
//   if(allDivs.length != 0){
//     console.log(typeof(allDivs));
//     let arr = [];
//     let count = 0;

//     for (let i = 0; i < allDivs.length; i++) {
//       const ele = allDivs[i];
//       if(ele.innerText == title){
//         arr.push(ele);
//         count++
//       }
//       console.log(count);
//       console.log(ele);
//  }

//   let allDivsFound = allDivs.filter((ele)=>{
//     return ele.innerText == title;
//   })
//   document.querySelector(".cart div.listDiv span").innerText = allDivsFound.length;
// }
//     for (let i = 0; i < allDivs.length; i++) {
// {
//   if(allDivs[i].innerText === title){
//     console.log("found");
//   }else{
//     console.log("Not found");

//   }
// }
// }
