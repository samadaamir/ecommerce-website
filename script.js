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
    image: "https://www.pinterest.com/pin/14003448838084909/"
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
    image: "https://www.pinterest.com/pin/4602397475350998144/"
  },

  {
    id: 5,
    name: "Women Dress",
    price: 3000,
    category: "women",
    image: "https://www.pinterest.com/pin/3166662232865401/"
  },

  {
    id: 6,
    name: "Women Handbag",
    price: 1800,
    category: "accessories",
    image: "https://www.pinterest.com/pin/708683691408122098/"
  },

  {
    id: 7,
    name: "Women Sandals",
    price: 1500,
    category: "women",
    image: "https://www.pinterest.com/pin/4590575472459329664/"
  },

  {
    id: 8,
    name: "Women Watch",
    price: 2200,
    category: "accessories",
    image: "https://www.pinterest.com/pin/700661654574566766/"
  },

  {
    id: 9,
    name: "Kids Shirt",
    price: 800,
    category: "kids",
    image: "https://www.pinterest.com/pin/1030761433453991555/"
  },

  {
    id: 10,
    name: "Kids Shoes",
    price: 1200,
    category: "kids",
    image: "https://www.pinterest.com/pin/1101411652637312775/"
  },

  {
    id: 11,
    name: "Kids Jacket",
    price: 2000,
    category: "kids",
    image: "https://www.pinterest.com/pin/225109681367027739/"
  },

  {
    id: 12,
    name: "Kids Glasses",
    price: 600,
    category: "kids",
    image: "https://www.pinterest.com/pin/304133781100130562/"
  },

  {
    id: 13,
    name: "Cap",
    price: 500,
    category: "accessories",
    image: "https://www.pinterest.com/pin/114982596733893100/"
  },

  {
    id: 14,
    name: "Sunglasses",
    price: 900,
    category: "accessories",
    image: "https://www.pinterest.com/pin/53198839343045459/"
  },

  {
    id: 15,
    name: "Backpack",
    price: 1600,
    category: "accessories",
    image: "https://www.pinterest.com/pin/331718328824765680/"
  },

  {
    id: 16,
    name: "Wallet",
    price: 700,
    category: "accessories",
    image: "https://www.pinterest.com/pin/919297342748605593/"
  },

  {
    id: 17,
    name: "Men Jeans",
    price: 2200,
    category: "men",
    image: "https://www.pinterest.com/pin/369858188166551221/"
  },

  {
    id: 18,
    name: "Women Top",
    price: 1400,
    category: "women",
    image: "https://www.pinterest.com/pin/2603712282318326/"
  },

  {
    id: 19,
    name: "Kids Shorts",
    price: 900,
    category: "kids",
    image: "https://www.pinterest.com/pin/643451865552195229/"
  },

  {
    id: 20,
    name: "Belt",
    price: 600,
    category: "accessories",
    image: "https://www.pinterest.com/pin/883761126908965913/"
  }

];

const container = document.querySelector(".product-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let startIndex = 0; // First product to show
const visibleCount = 5; // Number of products to show at a time

function renderProductsSlider() {
  container.innerHTML = ""; // clear previous cards

  // show only 4 products at a time
  for (let i = startIndex; i < startIndex + visibleCount; i++) {
    if (i >= products.length) break; // prevent overflow

    const product = products[i];

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
    btn.textContent = "Add to Cart";

    info.appendChild(name);
    info.appendChild(price);
    info.appendChild(btn);

    card.appendChild(img);
    card.appendChild(info);

    container.appendChild(card);
  }
}

// Next button
nextBtn.addEventListener("click", () => {
  if (startIndex + visibleCount < products.length) {
    startIndex++;
    renderProductsSlider();
  }
});

// Prev button
prevBtn.addEventListener("click", () => {
  if (startIndex > 0) {
    startIndex--;
    renderProductsSlider();
  }
});

// Initial render
renderProductsSlider();