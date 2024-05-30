const products = [
  {
    name: "Toilet",
    image:
      "https://images.unsplash.com/photo-1589824783837-6169889fa20f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Popular",
    price: "1234",
  },
  {
    name: "Dodge Car",
    image:
      "https://images.unsplash.com/photo-1609386464913-4cbfa39de540?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Challenger",
    price: "100000",
  },
  {
    name: "Ford Car",
    image:
      "https://images.unsplash.com/photo-1551501419-cb31cdd588d6?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "GT 2020",
    price: "69420",
  },
  {
    name: "Cat",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "mew",
    price: "6969",
  },
  {
    name: "Dog",
    image:
      "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "dawg",
    price: "69.69",
  },
  {
    name: "Porsche Taycan",
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    headline: "pune",
    price: "69069",
  },
  {
    name: "Roblox Boxing",
    image:
      "https://tr.rbxcdn.com/5a4b28d22087fc8fe1342ac087e8ee3e/768/432/Image/Webp",
    headline: "isuck",
    price: "9999",
  },
  {
    name: "Web Dev",
    image: "https://img.youtube.com/vi/_rmSp20X4wo/maxresdefault.jpg",
    headline: "tough",
    price: "9",
  },
];
const popular = [
  {
    name: "Toilet",
    image:
      "https://images.unsplash.com/photo-1589824783837-6169889fa20f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Popular",
    price: "1234",
  },
  {
    name: "Dodge Car",
    image:
      "https://images.unsplash.com/photo-1609386464913-4cbfa39de540?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Challenger",
    price: "100000",
  },
  {
    name: "Ford Car",
    image:
      "https://images.unsplash.com/photo-1551501419-cb31cdd588d6?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "GT 2020",
    price: "69420",
  },
  {
    name: "Cat",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "mew",
    price: "6969",
  },
  {
    name: "Dog",
    image:
      "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "dawg",
    price: "69.69",
  },
  {
    name: "Porsche Taycan",
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    headline: "pune",
    price: "69069",
  },
  {
    name: "Roblox Boxing",
    image:
      "https://tr.rbxcdn.com/5a4b28d22087fc8fe1342ac087e8ee3e/768/432/Image/Webp",
    headline: "isuck",
    price: "9999",
  },
  {
    name: "Web Dev",
    image: "https://img.youtube.com/vi/_rmSp20X4wo/maxresdefault.jpg",
    headline: "tough",
    price: "9",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(popular);

function addProduct() {
  var clutter = "";
  products.forEach(function (product) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img src="${product.image}" class="w-full h-full" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">$${product.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts() {
  var clutter = "";
  popular.forEach(function (product) {
    clutter += `<div
            class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
          >
            <div
              class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
            >
              <img class="w-full h-full object-cover" src="${product.image}" />
            </div>
            <div class="data py-2 w-full">
              <h1 class="leading-none font-semibold">${product.name}</h1>
              <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
                ${product.headline}
              </h4>
              <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
            </div>
          </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

addProduct();
addPopularProducts();
