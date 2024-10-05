let userName = JSON.parse(localStorage.getItem("User")).userName;
const sign = document.querySelector(".sign ul");
let chosenProducts = JSON.parse(localStorage.getItem("chosenProducts"));
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

if (localStorage.getItem("User")) {
  sign.style.display = "none";
  sign.parentElement.innerHTML = `
    <div class="cart" style="display: flex; align-items: center; position: relative; justify-content: flex-end;"> 
        <p style="color: white; margin: 0px 30px; cursor: pointer;">${userName}</p>
        <div style="padding: 5px; cursor: pointer;" onclick="showProductsCart()" class="cart-div"><i class="fa-solid fa-cart-shopping"></i></div>
        <span class="badge"
            style="width: 20px; height: 20px; background-color: red; color: white ;border-radius: 50%; text-align: center; line-height: 20px; display: block;">0</span>
        
        <div class="logout" style="margin-left: 20px; cursor: pointer;">Logout</div>
     </div>
    `;
}

let myProducts = [];
if (userName && chosenProducts) {
  for (let i = 0; i < productsArr.length; i++) {
    for (let j = 0; j < chosenProducts.length; j++) {
      if (productsArr[i].title === chosenProducts[j].title)
        myProducts.push(productsArr[i]);
    }
  }
  let htmlArr = myProducts.map((item) => {
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
            <div onclick="removeFromList('${title}')" class="btn">Remove From Cart</div>
            <i class="fa-regular fa-heart"></i>
        </div>
    </div>
  </div>
  `;
  });

  products.innerHTML = htmlArr;
}
let logout = document.querySelector(".logout");
logout.addEventListener("click", (e)=>{
  window.location = "./register.html";
window.localStorage.clear();
})

function removeFromList(title){
for (let i = 0; i < chosenProducts.length; i++) {
    if(chosenProducts[i].title === title){
let currentProduct = document.querySelector(".product");
      if(chosenProducts[i].quantity === 1){
        currentProduct.remove();
        chosenProducts.splice(chosenProducts[i], 1);
        localStorage.setItem("chosenProducts", JSON.stringify(chosenProducts));
      }else{
        console.log("sth");
        chosenProducts[i].quantity--;
      }
    }
    
}
if(JSON.parse(localStorage.getItem("chosenProducts")).length === 0){
  let noItems = document.querySelector(".container .no-items");
  noItems.innerHTML = `<h2 style="text-align: center; background-color: red; color: #fff;">There is no items</h2>`;
}
}
// وفي حل تاني انك تعمل فيلتر وتعدي كل العناصر ماعدا العنصر اللي عايز تمسحه وبعدين تضيف الكلام ده في الLocal Storage تاني
// وبعدين ترسم الالعناصر في الصفحة تاني (تنادي الفنكشن اللي بترسم ب innerHtml)