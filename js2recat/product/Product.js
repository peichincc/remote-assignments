const ProductData = () => {
  {
    id: 201807201824;
    category: "women";
    title: "前開衩扭結洋裝";
    description: "厚薄：薄\r\n彈性：無";
    price: 799;
    texture: "棉 100%";
    wash: "手洗，溫水";
    place: "中國";
    note: "實品顏色依單品照為主";
    story: "O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra-breezy.";
    main_image: "https://api.appworks-school.tw/assets/201807201824/main.jpg";

    images: [
      "https://api.appworks-school.tw/assets/201807201824/0.jpg",
      "https://api.appworks-school.tw/assets/201807201824/1.jpg",
      "https://api.appworks-school.tw/assets/201807201824/0.jpg",
      "https://api.appworks-school.tw/assets/201807201824/1.jpg",
    ];

    variants: [
      {
        color_code: "FFFFFF",
        size: "S",
        stock: 2,
      },
      {
        color_code: "FFFFFF",
        size: "M",
        stock: 1,
      },
      {
        color_code: "FFFFFF",
        size: "L",
        stock: 2,
      },
      {
        color_code: "DDFFBB",
        size: "S",
        stock: 9,
      },
      {
        color_code: "DDFFBB",
        size: "M",
        stock: 0,
      },
      {
        color_code: "DDFFBB",
        size: "L",
        stock: 5,
      },
      {
        color_code: "CCCCCC",
        size: "S",
        stock: 8,
      },
      {
        color_code: "CCCCCC",
        size: "M",
        stock: 5,
      },
      {
        color_code: "CCCCCC",
        size: "L",
        stock: 9,
      },
    ];

    colors: [
      {
        code: "FFFFFF",
        name: "白色",
      },
      {
        code: "DDFFBB",
        name: "亮綠",
      },
      {
        code: "CCCCCC",
        name: "淺灰",
      },
    ];

    sizes: ["S", "M", "L"];
  }
};

const ProductDetails = () => {
  const [number, setNumber] = React.useState(0);
  return (
    <>
      {/* inside is the product layout*/}
      {/* 1. Div detials is upper part of product */}
      <div className="productDetails">
        <div className="productPhoto">
          <img src="images/productimage.svg" />
        </div>
        <div className="productInfo">
          <div className="productName">前開衩扭結洋裝</div>
          <div className="productID">201807201824</div>
          <div className="productPrice">TWD. 799</div>
          <div className="info_line">
            <span></span>
          </div>
          <div className="productColor">
            顏色｜
            <div className="colorSelect">
              <div className="colorFirst"></div>
            </div>
            <div className="colorSecond"></div>
            <div className="colorThird"></div>
          </div>
          <div className="productSize">
            尺寸｜
            <div className="productWrapper">
              <div className="productSizeS">S</div>
              <div className="productSizeM">M</div>
              <div className="productSizeL">L</div>
            </div>
          </div>
          <div className="productNumber">
            <div className="productDesktopWord">數量｜</div>
            <div className="counterWrapper">
              <button
                onClick={() => {
                  setNumber(number - 1);
                }}
              >
                -
              </button>
              <div className="number">{number}</div>
              <button
                onClick={() => {
                  setNumber(number + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <button className="purchaseBtn">加入購物車</button>
          <div className="boxWord">
            <div className="productNote">實品顏色依單品照為主</div>
            <div className="productTexture">棉 100%</div>
            <div className="productDescription">
              厚薄：薄
              <br />
              彈性：無
            </div>
            <div className="productWash">手洗，溫水</div>
            <div className="productPlace">中國</div>
          </div>
        </div>
      </div>
      <div className="productSplit">更多產品資訊</div>
      {/* inside is the product layout*/}
    </>
  );
};

const ProductStoryShow = () => {
  return (
    <>
      {/* 2. Div productShow is lower part of product */}
      <div className="productShow">
        <div className="productStory">
          O.N.S is all about options, which is why we took our staple polo shirt
          and upgraded it with slubby linen jersey, making it even lighter for
          those who prefer their summer style extra-breezy.
        </div>
        <div className="productImages">
          <img src="images/product_0.svg" />
          <img src="images/product_1.svg" />
        </div>
      </div>
      {/* inside is the product layout*/}
    </>
  );
};

const Product = () => {
  return (
    <>
      <div className="ProductContainer">
        <ProductDetails />
        <ProductStoryShow />
      </div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div id="carousel"></div>
        <div id="product">
          <Product />
        </div>
        <Footer />
      </div>
    </div>
  );
};
