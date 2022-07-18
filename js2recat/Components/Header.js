class HeaderCategory extends React.Component {
  constructor() {
    super();
    this.changeCategory = this.changeCategory.bind(this);
  }
  changeCategory() {
    document.body.addEventListener("click", (e) => {
      if (e.target.id == `logo`) {
        sessionStorage.clear();
        // console.log("back");
      } else if (e.target.id == `women`) {
        sessionStorage.setItem("women", category);
      }
    });
  }
  render() {
    return (
      <>
        <div className="logocontainer">
          <a href="../index.html">
            <img
              src="images/logo.png"
              id="logo"
              onClick={this.changeCategory}
            />
          </a>
        </div>

        <ul className="nav">
          <li className="navClick">
            <a
              href="../index.html?category=women"
              id="nav-women"
              onClick={this.changeCategory}
            >
              女裝
            </a>
          </li>
          <div className="navsplit"></div>
          <li className="navClick">
            <a
              href="../index.html?category=men"
              id="nav-men"
              onClick={this.changeCategory}
            >
              男裝
            </a>
          </li>
          <div className="navsplit"></div>
          <li className="navClick">
            <a
              href="../index.html?category=accessories"
              id="nav-accessories"
              onClick={this.changeCategory}
            >
              配件
            </a>
          </li>
        </ul>
      </>
    );
  }
}

const SearchBar = () => {
  // mobile search bar
  const { useState } = React;
  const [moblieSearchState, setmoblieSearchState] = useState("flex");
  const [MobileInput, setMobileInput] = useState("none");
  const showInput = () => {
    setmoblieSearchState("none");
    setMobileInput("flex");
  };
  const clickOutsideInput = () => {
    document.body.addEventListener("click", (e) => {
      setMobileInput("none");
      setmoblieSearchState("flex");
    });
  };
  return (
    <>
      <div className="search">
        <form name="searchForm" id="searchForm" method="GET">
          <input
            name="keyword"
            type="text"
            id="search"
            placeholder="Search..."
          />
          <button type="submit" id="searchbar">
            <img src="images/search.png" />
          </button>
        </form>
      </div>

      <div className="usericon">
        <div className="cart">
          <img src="images/cart.png" />
          <div className="cartnumber">1</div>
        </div>
        <div className="profile">
          <img src="images/member.png" />
        </div>
      </div>

      <div className="mobilesearch">
        <div
          className="mobileBarShow"
          style={{
            display: MobileInput,
          }}
        >
          <input
            name="keyword"
            type="text"
            id="mobileSearchInput"
            placeholder="Search..."
          />
          <img id="mobileClickSearch" src="images/search.png" />
        </div>
        <div
          className="mobileClick"
          onClick={showInput}
          style={{
            display: moblieSearchState,
          }}
        >
          <img src="images/search.png" />
        </div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-bar">
          <HeaderCategory />
          <SearchBar />
        </div>
        <div className="split"></div>
      </div>
    </>
  );
};

// change location href
//  const url = new URLSearchParams(location.href);
//     const searchParams = new URLSearchParams(location.search);
//     const origin_href = "index.html";
//     async function getAllProductData(Catagory = "all", page = 0) {
//       if (Catagory !== currentCatagory) {
//         products = [];
//         currentpage = 0;
//         page = 0;
//       }
//       currentCatagory = Catagory;
//       if (searchParams.has("keyword")) {
//         Api = `https://api.appworks-school.tw/api/1.0//products/search${Catagory}&paging=${page}`;
//       } else {
//         Api = `https://api.appworks-school.tw/api/1.0//products/${Catagory}?paging=${page}`;
//       }
//       let data = await fetch(Api);
//       let parseData = await data.json();
//       renderProduct(parseData);
//     }
//     function renderProduct(parseData) {
//       if (!parseData.next_paging) {
//         checkNextPage = false;
//       }
//       products = [...products, ...parseData.data];
//       let renderCard = "";
//       for (let i = 0; i < products.length; i++) {
//         let color_square = "";
//         for (let j = 0; j < products[i].colors.length; j++) {
//           color_square += `<div class="single_square" style="background-color:#${products[i].colors[j].code}"></div>`;
//         }
//         renderCard += `<div class="singleproduct">
//         <img class="product_img" src="${products[i].main_image}" alt="${products[i].title}"/>
//         <div class="square">${color_square}</div>
//         <p class="title">${products[i].title}</p>
//         <p class="price">TWD.${products[i].price}</p>
//     </div>`;
//       }
//       productSection[0].innerHTML = renderCard;
//       currentpage++;
