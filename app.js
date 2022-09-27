const menuDesktop=document.querySelector(".desktop-menu");
const menuMain = document.querySelector(".navbar-email");
const menu =document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const detallesCarrito = document.querySelector(".navbar-shopping-cart");
const asideDetallesCarrito=document.querySelector(".product-detail");


menuMain.addEventListener(("click"), popUpMenu);
menu.addEventListener("click", inmenuMobile);
detallesCarrito.addEventListener("click", aside);

function popUpMenu() {
    if (menuDesktop.classList.contains("active")) {
        menuDesktop.classList.remove("active");   
    }else{
        menuDesktop.classList.add("active");
        asideDetallesCarrito.classList.remove("active");

    }
}
function inmenuMobile(){
    if(menuMobile.classList.contains("active")){
        menuMobile.classList.remove("active");

    }else{
        menuMobile.classList.add("active");
        asideDetallesCarrito.classList.remove("active");
    }
}

function aside(){
    if (asideDetallesCarrito.classList.contains("active")){
        asideDetallesCarrito.classList.remove("active");

    }else{
        asideDetallesCarrito.classList.add("active")
        menuMobile.classList.remove("active");
        menuDesktop.classList.remove("active");
    }
}

/*

<div class="cards-container">
    
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
*/


const cardContainer=document.querySelector(".cards-container");
const productList=[];

productList.push({
    name: "bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 

});
productList.push({
    name: "moto",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 

});
productList.push({
    name: "carro",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});



function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const imgCard =document.createElement("img");
        imgCard.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        const productInfoContainer = document.createElement("div");
        const price = document.createElement("p");
        price.innerText= "$" + product.price
        const name =document.createElement("p");
        name.innerText= product.name;
    
        const figure= document.createElement("figure");
        const iconcard=document.createElement("img");
        iconcard.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        figure.appendChild(iconcard);
        productInfoContainer.appendChild(price);
        productInfoContainer.appendChild(name);
        productInfo.appendChild(productInfoContainer);
        productInfo.appendChild(figure);
    
        productCard.appendChild(imgCard);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);