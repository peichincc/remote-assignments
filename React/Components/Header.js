class HeaderCategory extends React.Component {
  render() {
    return (
      <>
        <div className="logocontainer">
          <a href="index.html">
            <img src="images/logo.png" id="logo" />
          </a>
        </div>

        <ul className="nav">
          <li className="navClick">
            <a href="index.html?category=women" id="nav-women">
              女裝
            </a>
          </li>
          <div className="navsplit"></div>
          <li className="navClick">
            <a href="index.html?category=men" id="nav-men">
              男裝
            </a>
          </li>
          <div className="navsplit"></div>
          <li className="navClick">
            <a href="index.html?category=accessories" id="nav-accessories">
              配件
            </a>
          </li>
        </ul>
      </>
    );
  }
}

const SearchBar = ({ cartItemAmount }) => {
  const { useState } = React;
  // Mobile search bar
  const [moblieSearchState, setmoblieSearchState] = useState("flex");
  const [MobileInput, setMobileInput] = useState("none");
  const showInput = () => {
    setmoblieSearchState((pre) => {
      if (pre === "none") {
        return "flex";
      } else {
        return "none";
      }
    });
    setMobileInput((pre) => {
      if (pre === "flex") {
        return "none";
      } else {
        return "flex";
      }
    });
  };
  return (
    <>
      <div className="search">
        <form
          name="searchForm"
          id="searchForm"
          method="GET"
          action="index.html"
        >
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
        <a href="checkout.html">
          <div className="cart">
            <img src="images/cart.png" />
            <div className="cartnumber">{cartItemAmount}</div>
          </div>
        </a>
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
          <form method="GET" action="index.html" style={{ width: "100%" }}>
            <input
              name="keyword"
              type="text"
              id="mobileSearchInput"
              placeholder="Search..."
            />
          </form>
          <img
            id="mobileClickSearch"
            src="images/search.png"
            onClick={showInput}
          />
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

const Header = ({ cartItemAmount }) => {
  return (
    <>
      <div className="header">
        <div className="header-bar">
          <HeaderCategory />
          <SearchBar cartItemAmount={cartItemAmount} />
        </div>
        <div className="split"></div>
      </div>
    </>
  );
};
