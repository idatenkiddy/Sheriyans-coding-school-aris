const imgarr = [
  {
    name: "Toilet",
    image:
      "https://images.unsplash.com/photo-1589824783837-6169889fa20f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dodge Car",
    image:
      "https://images.unsplash.com/photo-1609386464913-4cbfa39de540?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ford Car",
    image:
      "https://images.unsplash.com/photo-1551501419-cb31cdd588d6?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cat",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dog",
    image:
      "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Porsche Taycan",
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
  },
];

function showTheCards() {
  var htmladder = "";
  imgarr.forEach(function (obj) {
    htmladder += `<div class="box">
              <img class="cursor-pointer" src="${obj.image}" alt="">
              <div class="caption"></div>`;
  });

  document.querySelector(".container").innerHTML = htmladder;
}

function handleSearchFuntionality() {
  let input = document.querySelector("#searchinput");
  let overlay = document.querySelector(".overlay");

  input.addEventListener("focus", function () {
    overlay.style.display = "block";
  });

  input.addEventListener("blur", function () {
    overlay.style.display = "none";
    document.querySelector(".searchdata").style.display = "none";
  });

  input.addEventListener("input", function () {
    searchValue = input.value.toLowerCase();
    // if (!searchValue == 0) console.log(searchValue);

    const filterd_imgarr = imgarr.filter((obj) =>
      obj.name.toLowerCase().startsWith(searchValue)
    );

    var clutter = "";

    filterd_imgarr.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
      <i class="ri-search-line font-semibold mr-5"></i>
      <h3 class="font-semibold">${obj.name.toLowerCase()}</h3>
      </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });
}

handleSearchFuntionality();
showTheCards();
