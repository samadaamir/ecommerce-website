const products = [

  {
    id: 1,
    name: "Men T-Shirt",
    price: 1200,
    category: "men",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 2,
    name: "Men Shoes",
    price: 2500,
    category: "men",
    image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHNob2VzfGVufDB8fDB8fHww"
  },

  {
    id: 3,
    name: "Men Jacket",
    price: 3500,
    category: "men",
    image: "https://images.unsplash.com/photo-1675877879221-871aa9f7c314?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 4,
    name: "Men Watch",
    price: 2000,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1730628801130-61ca50004a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbiUyMHdhdGNofGVufDB8fDB8fHww"
  },

  {
    id: 5,
    name: "Women Dress",
    price: 3000,
    category: "women",
    image: "https://i.pinimg.com/736x/99/c1/f4/99c1f4b53b184155d8ef2e603bff3d72.jpg"
  },

  {
    id: 6,
    name: "Women Handbag",
    price: 1800,
    category: "accessories",
    image: "https://i.pinimg.com/736x/05/c2/d3/05c2d3aaec12bde214e87b2c9d7b0db1.jpg"
  },

  {
    id: 7,
    name: "Women Sandals",
    price: 1500,
    category: "women",
    image: "https://i.pinimg.com/1200x/0a/a0/ee/0aa0eefa00bc37012582ddf2d696a44d.jpg"
  },

  {
    id: 8,
    name: "Women Watch",
    price: 2200,
    category: "accessories",
    image: "https://i.pinimg.com/736x/dc/67/27/dc67279e9ef133ff5112bef12671d83e.jpg"
  },

  {
    id: 9,
    name: "Kids Shirt",
    price: 800,
    category: "kids",
    image: "https://i.pinimg.com/1200x/40/2a/bf/402abf5af58bfeb7de4a20ed346c9071.jpg"
  },

  {
    id: 10,
    name: "Kids Shoes",
    price: 1200,
    category: "kids",
    image: "https://i.pinimg.com/1200x/d6/46/44/d64644f32dcb5fd29a538cd3fb5a3494.jpg"
  },

  {
    id: 11,
    name: "Kids Jacket",
    price: 2000,
    category: "kids",
    image: "https://i.pinimg.com/1200x/c1/21/aa/c121aa9af1356e540b58e7397bb37487.jpg"
  },

  {
    id: 12,
    name: "Kids Glasses",
    price: 600,
    category: "kids",
    image: "https://i.pinimg.com/1200x/68/0a/f5/680af5f92dcf0072049ee1cf86f5899d.jpg"
  },

  {
    id: 13,
    name: "Cap",
    price: 500,
    category: "accessories",
    image: "https://i.pinimg.com/736x/44/4c/fe/444cfea4975acf62164ca519d62cee86.jpg"
  },

  {
    id: 14,
    name: "Sunglasses",
    price: 900,
    category: "accessories",
    image: "https://i.pinimg.com/736x/8d/87/ea/8d87eae479b4ca9ea695718a65f8eec3.jpg"
  },

  {
    id: 15,
    name: "Backpack",
    price: 1600,
    category: "accessories",
    image: "https://i.pinimg.com/1200x/9c/79/b6/9c79b6230cf24eabcaa57e7c47c19f46.jpg"
  },

  {
    id: 16,
    name: "Wallet",
    price: 700,
    category: "accessories",
    image: "https://i.pinimg.com/1200x/89/0d/27/890d2745f2dd33febd789e11f8718d6c.jpg"
  },

  {
    id: 17,
    name: "Men Jeans",
    price: 2200,
    category: "men",
    image: "https://i.pinimg.com/736x/5d/b7/fa/5db7fa3b674edfed9a64e0a2a3738d37.jpg"
  },

  {
    id: 18,
    name: "Women Top",
    price: 1400,
    category: "women",
    image: "https://i.pinimg.com/736x/2f/a7/cc/2fa7cc6b395bfa236fd87015a5b6112b.jpg"
  },

  {
    id: 19,
    name: "Kids Shorts",
    price: 900,
    category: "kids",
    image: "https://i.pinimg.com/1200x/87/30/bf/8730bf473b45bd44ed3afadb1e16b30a.jpg"
  },

  {
    id: 20,
    name: "Belt",
    price: 600,
    category: "accessories",
    image: "https://i.pinimg.com/1200x/c9/3d/39/c93d39e5c3a470f8e226cd627b99f68c.jpg"
  }

];


const cartIcon = document.getElementById("cart-container");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

const container = document.querySelector(".product-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const cartCount = document.querySelector("#cart-count");
const categoryLinks = document.querySelectorAll("[data-category]");
let selectedCategory = "all";

cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  renderCartSidebar();
});
closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});
function renderCartSidebar() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Cart is empty.</p>";
    cartTotal.textContent = "";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.img}">
      <h4>${item.name}</h4>
      <p>Rs. ${item.price}</p>
      <button class="remove-btn">Remove</button>
    `;

    // remove item
    div.querySelector(".remove-btn").addEventListener("click", () => {
      cart = cart.filter(p => p.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCartSidebar();
      cartCount.textContent = cart.length;
    });

    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = "Total: Rs. " + total;
}

categoryLinks.forEach(link => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    selectedCategory = link.dataset.category;
    startIndex = 0;
    renderProductsSlider();
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.textContent = cart.length;

let startIndex = 0;           
const visibleCount = 5;       

function renderProductsSlider() {
  let filteredProducts;
  if (selectedCategory === "all") {
    filteredProducts = products;
  }
  else {
    filteredProducts = products.filter(p => p.category === selectedCategory);
  }

  if (startIndex >= filteredProducts.length) {
    startIndex = 0;
  }

  container.innerHTML = ""; 

  for (let i = startIndex; i < startIndex + visibleCount; i++) {
    if (i >= filteredProducts.length) break;

    const product = filteredProducts[i];

    const card = document.createElement("div");
    card.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.image;

    const info = document.createElement("div");
    info.classList.add("product-info");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "Rs. " + product.price;

    const btn = document.createElement("button");
    btn.classList.add("add-to-cart");
    btn.textContent = "Add to Cart";

    btn.addEventListener("click", () => {
      const exists = cart.some(item => item.id === product.id);
      if (exists) {
        alert(`${product.name} is already in the cart!`);
        return;
      }

      const productData = {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.image
      };

      cart.push(productData);
      localStorage.setItem("cart", JSON.stringify(cart));
      cartCount.textContent = cart.length;

      alert(`${product.name} added to cart!`);
    });

    info.appendChild(name);
    info.appendChild(price);
    info.appendChild(btn);

    card.appendChild(img);
    card.appendChild(info);

    container.appendChild(card);
  }
}

nextBtn.addEventListener("click", () => {

  let filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);
  if (startIndex + visibleCount < filteredProducts.length) {
    startIndex++;
    renderProductsSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (startIndex > 0) {
    startIndex--;
    renderProductsSlider();
  }
});
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutForm = document.getElementById("checkout-form");

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  checkoutForm.classList.remove("hidden");
});
renderProductsSlider();
