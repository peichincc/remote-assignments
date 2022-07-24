const { useState, useEffect } = React;

const ProductDetails = ({ checkLocalStorageItem }) => {
  // Get the product id
  const oldURL = window.location.href;
  const productValue = new URL(oldURL).searchParams.get("id");
  // Counter
  const [number, setNumber] = React.useState(0);
  // Select the product color
  const [selectColor, setSelectColor] = useState({
    theColor: null,
    selectIndex: null,
  });
  // Select the product size
  const [selectSize, setSelectSize] = useState({
    theSize: null,
    selectIndex: null,
  });

  // fetch API
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // fetch API
    fetch(
      `https://api.appworks-school.tw/api/1.0/products/details?id=${productValue}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  // Get the API data
  const itemsDetails = items.data;

  // Determine whether the data is correctly fetched
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
    // Successfully fetched then render the product details
  } else {
    // Get the product descriptions
    const itemsDescriptions = itemsDetails.description.split("\r\n");
    // Get the variants (stock info)
    const itemsVariants = itemsDetails.variants;
    // console.log(itemsDetails.variants);
    // Generate new data for determining and user select data for localstorage
    // data form: {id: {color: {size: stock/amount}}}
    // data2 -> Initial variants data
    // userSelectData -> User select to localstorage (initial: 0)
    const data2 = {};
    const userSelectData = {};
    for (let d of itemsVariants) {
      if (!data2[d.color_code]) {
        data2[d.color_code] = {};
        userSelectData[d.color_code] = {};
      }
      data2[d.color_code][d.size] = d.stock;
      userSelectData[d.color_code][d.size] = 0;
    }
    if (!localStorage.userSelectData) {
      localStorage.userSelectData = JSON.stringify({
        [productValue]: userSelectData,
      });
    }

    // Select the product color
    const colorCorrector = (value) => {
      setSelectColor(value);
    };
    // Select the product size
    const sizeCorrector = (value) => {
      setSelectSize(value);
    };

    // Get the stock number
    // Current stock = Stock - User select amount
    const getStock = () => {
      if (selectColor.selectIndex == null || selectSize.selectIndex == null) {
        return 0;
      }
      const newData2 = JSON.parse(localStorage.userSelectData);
      if (
        data2[selectColor.theColor][selectSize.theSize] -
          newData2[productValue][selectColor.theColor][selectSize.theSize] >=
        0
      ) {
        return (
          data2[selectColor.theColor][selectSize.theSize] -
          newData2[productValue][selectColor.theColor][selectSize.theSize]
        );
      } else {
        return 0;
      }
    };

    // Set up localstorage and callback checklocalstorage to update the cartnumber in the header and footer
    // newData2 will update while user added product into cart (+= counter number / from Counter props: updateProductNumber(newNumber);)
    const setLoaclStorage = () => {
      const newData2 = JSON.parse(localStorage.userSelectData);
      newData2[productValue][selectColor.theColor][selectSize.theSize] +=
        number;
      localStorage.userSelectData = JSON.stringify(newData2);
      checkLocalStorageItem();
      // All Stock
      console.log(data2);
      // Current User all selected
      console.log(newData2);
      // With product ID and transform into string
      console.log(localStorage.userSelectData);
    };
    // Store another local storage data to use in the checkout page?

    // Render DOM from here
    return (
      <>
        {/* inside is the product layout*/}
        {/* 1. Div detials is upper part of product */}
        <div className="productDetails">
          <div className="productPhoto">
            <img src={itemsDetails ? itemsDetails.main_image : "cannot get"} />
          </div>
          <div className="productInfo">
            <div className="productName">{itemsDetails.title}</div>
            <div className="productID">{itemsDetails.id}</div>
            <div className="productPrice">TWD. {itemsDetails.price}</div>
            <div className="info_line">
              <span></span>
            </div>

            {/* Product color */}
            <div className="productColor">
              顏色｜
              {itemsDetails
                ? itemsDetails.colors.map((d, index) => {
                    return (
                      <Color
                        color={d}
                        key={`color_${index}`}
                        index={index}
                        colorCorrector={colorCorrector}
                        selectColor={selectColor}
                      />
                    );
                  })
                : null}
            </div>

            {/* Product size */}
            <div className="productSize">
              尺寸｜
              <div className="productWrapper">
                {itemsDetails
                  ? itemsDetails.sizes.map((d, index) => (
                      <Size
                        size={d}
                        key={`size_${index}`}
                        index={index}
                        sizeCorrector={sizeCorrector}
                        selectSize={selectSize}
                        selectColor={selectColor}
                      />
                    ))
                  : null}
              </div>
            </div>

            {/* Get the stock number */}
            {selectColor.selectIndex !== null &&
              selectSize.selectIndex !== null && (
                <div className="productStock">
                  商品剩餘數量：
                  <div className="StockNumber">{getStock()}</div>
                </div>
              )}

            {/* Product Number */}
            <div className="productNumber">
              <div className="productDesktopWord">數量｜</div>
              <Counter
                max={getStock()}
                updateProductNumber={setNumber}
                number={number}
                setNumber={setNumber}
              />
            </div>

            {/* Purchase Botton to the cart */}
            {/* While user click the btn:
            -> Store the counter current amount into localstorage
            -> Set the color and size back to null */}
            <button
              className="purchaseBtn"
              onClick={() => {
                setLoaclStorage();
                setSelectColor({
                  theColor: null,
                  selectIndex: null,
                });
                setSelectSize({
                  theSize: null,
                  selectIndex: null,
                });
                setNumber(0);
              }}
            >
              加入購物車
            </button>

            <div className="boxWord">
              <div className="productNote">{itemsDetails.note}</div>
              <div className="productTexture">{itemsDetails.texture}</div>
              <div className="productDescription">
                {itemsDescriptions[0]}
                <br />
                {itemsDescriptions[1]}
              </div>
              <div className="productWash">{itemsDetails.wash}</div>
              <div className="productPlace">產地：{itemsDetails.place}</div>
            </div>
          </div>
        </div>
        <div className="productSplit">
          更多產品資訊<div className="grid"></div>
        </div>
        {/* inside is the product layout  */}
      </>
    );
  }
};

const ProductStoryShow = () => {
  const { useState, useEffect } = React;
  // fetch API
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // get the product id
    const oldURL = window.location.href;
    const productValue = new URL(oldURL).searchParams.get("id");
    // fetch API
    fetch(
      `https://api.appworks-school.tw/api/1.0/products/details?id=${productValue}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const itemsDetails = items.data;

  // Determine whether the data is correctly fetched
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
    // Successfully fetched then render the product details
  } else {
    // Render DOM from here
    return (
      <>
        {/* 2. Div productShow is lower part of product */}
        <div className="productShow">
          <div className="productStory">{itemsDetails.story}</div>
          {itemsDetails.images.map((d, index) => (
            <div key={`storyImg_${index}`} className="productImages">
              <img src={d} alt="story_img" />
            </div>
          ))}
        </div>
        {/* inside is the product layout*/}
      </>
    );
  }
};

const Product = ({ checkLocalStorageItem }) => {
  return (
    <>
      <div className="ProductContainer">
        <ProductDetails checkLocalStorageItem={checkLocalStorageItem} />
        <ProductStoryShow />
      </div>
    </>
  );
};
