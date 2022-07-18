// Carousel Effect
const mktURL = "https://api.appworks-school.tw/api/1.0/marketing/campaigns";
let time = 1;
let page;
// index MKT campaign
// 1. Get API data
async function getData(url) {
  return await fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dataToDOM(data.data);
      changeSlide(1);
      changeDots(1);
      onDotClick();
      createInterval(1);
    });
}

window.onload = () => {
  // get the MKT campaign
  getData(mktURL);
  // check session -> get the product
  checkSession();
  // User click category
  clickCategory();
  // User click to the main page
  backToIndex();
};

// 2. render into div Element
function dataToDOM(slideObjList) {
  const slidesHtml = slideObjList
    .map(({ id, product_id, picture, story }, index) => {
      const text = story.split("\r\n");
      const storyline = text.slice(0, 3).join("<br />");
      const author = text[3];
      return `
          <div class="slideWelcomeImage" id="data-slide-${id}">
            <img class="welcomeImage" src="${picture}">
            <div class="carouselContainer">
                  <div class="words">${storyline}</div>
                  <div class="author">${author}</div>
            </div>
          </div>
        `;
    })
    .join("");

  const dotsHtml = slideObjList
    .map(({ id, product_id, picture, story }, index) => {
      if (id === 1) {
        return `
            <li class="dotActive" id="data-${id}" onclick="window.onDotClick"></li>
        `;
      } else {
        return `
            <li class="dot" id="data-${id}" onclick="window.onDotClick"></li>
        `;
      }
    })
    .join("");

  const carouselHtml = `
        <div class="carousel">
            <div class="slides"> ${slidesHtml} </div>
            <ul class="dotList">${dotsHtml}</ul>
        </div>
    `;

  const carouselDom = document.getElementById("carousel");
  carouselDom.innerHTML = carouselHtml;

  // User hover the Dots
  carouselDom.addEventListener(
    "mouseenter",
    function (e) {
      // clearInterval here
      // console.log(e);
      stopInterval();
    },
    false
  );
  carouselDom.addEventListener(
    "mouseleave",
    function (e) {
      // Re-create setInterval here
      // console.log(e);
      createInterval(time);
    },
    false
  );
  // console.log(carouselHtml);
}
// 3. User click to change the welcomeImage Section by z-index
function onDotClick() {
  const btn = document.querySelector(".dotList");
  btn.addEventListener("click", function (event) {
    const changeTarget = event.target.getAttribute("id");
    const targetTime = changeTarget.replace(/[^0-9]/gi, "");
    const newTime = parseInt(targetTime);
    time = newTime;
    changeSlide(newTime);
    changeDots(newTime);
  });
}
// 4. Timer function to set the Slide Effect
let intervalID;
function createInterval(T) {
  var List = document.querySelectorAll(".dot");
  time = +T;
  intervalID = setInterval(() => {
    if (time > 2) {
      time = 0;
    }
    let timeA = time + 1;
    changeSlide(timeA);
    changeDots(timeA);
    time += 1;
  }, 5000);
}
function stopInterval() {
  clearInterval(intervalID);
}
// Helper: Change slide function
function changeSlide(startTime) {
  let changeTarget = `data-${+startTime}`;
  document.getElementById(changeTarget).className = "dot dotActive";
  var List = document.querySelectorAll(".dot");
  for (var i = 0; i < List.length; i++) {
    List[i].className = "dot";
  }
  document.querySelectorAll(".slideWelcomeImage").forEach(function (element) {
    element.classList.remove("Show");
  });
  if (changeTarget === "data-1") {
    document.getElementById("data-slide-1").classList.add("Show");
  } else if (changeTarget === "data-2") {
    document.getElementById("data-slide-2").classList.add("Show");
  } else {
    document.getElementById("data-slide-3").classList.add("Show");
  }
}
function changeDots(startTime) {
  var changeTarget = `data-${startTime}`;
  // Change Dots
  // - Erase the color of the dots
  var List = document.querySelectorAll(".dot");
  for (var i = 0; i < List.length; i++) {
    List[i].className = "dot";
  }
  // - Add color to the dots
  document.getElementById(changeTarget).className = "dot dotActive";
}

// Product feature //
const ProductURL = "https://api.appworks-school.tw/api/1.0/products/all";
// 1. Get API data
async function getProductData(url) {
  return await fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      page = data.next_paging;
      // Render the product layout
      productDataToDOM(data.data);
    });
}

// 2. Render data into DOM
function productDataToDOM(productObjList) {
  const productHtml = productObjList
    .map((data) => {
      let colorHtml = ``;
      for (i = 0; i < data.colors.length; i++) {
        colorHtml += `<div class="colorPoint" style="background-color:#${data.colors[i].code};"></div>`;
      }
      return `<div class="box">
                <div class="box-image"><img src=${data.main_image}></div>
                <div class="colorAll">${colorHtml}</div>
                <div class="productName"><p>${data.title}</p></div>
                <div class="productPrice"><p>TWD.${data.price}</p></div>
            </div>
           `;
    })
    .join("");
  const productDom = document.getElementById("product");
  productDom.innerHTML += productHtml;
  // console.log(productHtml);
}

// 3. Window Scroll to bottom and get API
window.addEventListener("scroll", () => {
  // handle the scroll event
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    page !== undefined
  ) {
    // throttle(console.log("bottom here"), 2000);
    throttle(() => {
      getProductData(
        `https://api.appworks-school.tw/api/1.0/products/${category}?paging=${page}`
      );
    }, 2000);
  }
});
let throttlePause;
function throttle(callback, wait) {
  if (throttlePause) return;
  throttlePause = true;
  callback();
  setTimeout(() => {
    throttlePause = false;
  }, wait);
}

// Category Feature
// Overall product URL structure = https://api.appworks-school.tw/api/1.0/products/${category}?paging=${page}
const womenURL = "https://api.appworks-school.tw/api/1.0/products/women";
const menURL = "https://api.appworks-school.tw/api/1.0/products/men";
const accURL = "https://api.appworks-school.tw/api/1.0/products/accessories";
let category = "all";

// User click product category
function clickCategory() {
  const categoryClick = document.querySelector(".nav");
  categoryClick.addEventListener("click", function (event) {
    const changeTarget = event.target.getAttribute("id");
    // Go to different category
    category = changeTarget.substr(4);
    // Session Storage
    sessionStorage.setItem("category", category);
    var href = event.target.getAttribute("href");
    if (changeTarget === "nav-women") {
      // category = women;
      // location.href = "index.html?category=women";
      history.pushState(
        { name: "searchResult" },
        null,
        `index.html?category=${category}`
      );
      document.getElementById("product").innerHTML = "";
      throttle(() => {
        getProductData(womenURL);
      }, 500);
      menuActive(changeTarget);
    } else if (changeTarget === "nav-men") {
      // category = men;
      // location.href = "index.html?category=men";
      history.pushState(
        { name: "searchResult" },
        null,
        `index.html?category=${category}`
      );
      document.getElementById("product").innerHTML = "";
      throttle(() => {
        getProductData(menURL);
      }, 500);
      menuActive(changeTarget);
    } else if (changeTarget === "nav-accessories") {
      // category = accessories;
      // location.href = "index.html?category=accessories";
      history.pushState(
        { name: "searchResult" },
        null,
        `index.html?category=${category}`
      );
      document.getElementById("product").innerHTML = "";
      throttle(() => {
        getProductData(accURL);
      }, 500);
      menuActive(changeTarget);
    }
    // When the new ajax content is loaded, page scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    event.preventDefault();
  });
}
function backToIndex() {
  const backToIndex = document.getElementById("logo");
  backToIndex.addEventListener("click", function (event) {
    var href = event.target.getAttribute("href");
    location.href = "index.html";
    document.getElementById("product").innerHTML = "";
    getProductData(ProductURL);
    category = "all";
    menuClear();
    sessionStorage.clear();
    event.preventDefault();
  });
}
// Change Nav bar
function menuActive(changeTarget) {
  menuClear();
  document.getElementById(changeTarget).className = "menuActive";
}
function menuClear() {
  var List = document.querySelectorAll(".menuActive");
  for (var i = 0; i < List.length; i++) {
    List[i].className = "";
  }
}

// Refresh stay in the same page
function checkSession() {
  const userPosition = sessionStorage.getItem("category");
  if (!userPosition) {
    category = "all";
    getProductData(
      `https://api.appworks-school.tw/api/1.0/products/${category}`
    );
  } else if (
    userPosition === `men` ||
    userPosition === `women` ||
    userPosition === `accessories`
  ) {
    category = userPosition;
    document.getElementById("product").innerHTML = "";
    getProductData(
      `https://api.appworks-school.tw/api/1.0/products/${category}`
    );
    var changeTarget = `nav-${category}`;
    menuActive(changeTarget);
  } else {
    document.getElementById("product").innerHTML = "";
    const searchURL =
      "https://api.appworks-school.tw/api/1.0/products/search?keyword=" +
      `${userPosition}`;
    getProductData(searchURL);
  }
}

// Search Feature
// Desktop version search
function searchProduct() {}
const searchAction = document.getElementById("searchbar");
searchAction.addEventListener("click", function (event) {
  const formElement = document.getElementById("searchForm");
  const name = formElement[0].value.replace(/\s/g, "");
  document.getElementById("product").innerHTML = "";
  const searchURL =
    "https://api.appworks-school.tw/api/1.0/products/search?keyword=" +
    `${name}`;
  getProductData(searchURL);
  event.preventDefault();
  menuClear();
  sessionStorage.setItem("category", name);
  // Search
  history.pushState({ name: "searchResult" }, null, `index.html`);
  // When the new ajax content is loaded, page scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Add url
  // history.pushState(
  //   { name: "searchResult" },
  //   null,
  //   `index.html?keyword=${name}`
  // );
});

// Mobile version search
const openBtn = document.querySelector(".mobileClick");
const mobilebtn = document.querySelector(".mobileClick");
const mobileBar = document.querySelector(".mobileBarShow");
// Opent the mobile search bar
mobilebtn.addEventListener("click", function (event) {
  mobileBar.style.display = "flex";
  openBtn.style.display = "none";
});
// Click to Search in mobile search bar
const mobileSearchClick = document.getElementById("mobileClickSearch");
mobileSearchClick.addEventListener("click", function (event) {
  const submitValue = mobileSearchInput.value.replace(/\s/g, "");
  document.getElementById("product").innerHTML = "";
  const searchURL =
    "https://api.appworks-school.tw/api/1.0/products/search?keyword=" +
    `${submitValue}`;
  getProductData(searchURL);
  event.preventDefault();
  menuClear();
  sessionStorage.clear();
  // Search
  history.pushState({ name: "searchResult" }, null, `index.html`);
  // Add url
  // history.pushState(
  //   { name: "searchResult" },
  //   null,
  //   `index.html?keyword=${submitValue}`
  // );
});
// Click outside to close the search bar
window.addEventListener("mouseup", function (event) {
  var box = document.querySelector(".mobileBarShow");
  if (event.target != box && event.target.parentNode != box) {
    mobileBar.style.display = "none";
    openBtn.style.display = "block";
  }
});
