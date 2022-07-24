const Checkout = () => {
  return (
    <>
      <div className="checkout_wrapper">
        {/* Mobile Version */}
        <div className="productInfo_section_mobile">
          <p className="cart_container_title_Cart_mobile">購物車(3)</p>
        </div>
        {/* Desktop Version */}
        <div className="productInfo_section_desktop">
          <div className="productInfo_table">
            <div className="cart_container_header">
              <p className="cart_container_title_Cart">購物車(3)</p>
              <p className="cart_container_title_Amount">數量</p>
              <p className="cart_container_title_Price">單價</p>
              <p className="cart_container_title_totalPrice">小計</p>
            </div>
          </div>
        </div>
        <div className="productInfo_body">
          <ProductInfo />
        </div>
        <OrderInfo />
        <PaymentInfo />
        <Summary />
      </div>
    </>
  );
};

const ProductInfo = () => {
  return (
    <>
      <div className="productInfo_contentBox">
        {/* Product Content 1 Start */}
        <div className="checkout_span_mobile">
          <span></span>
        </div>
        <div className="productInfo_mainInfo">
          {/* Product Img, ID, Color, Size */}
          <div className="productInfo_mainInfo_textandimg">
            <div className="productInfo_mainInfo_left">
              <div className="productInfo_img">
                <img src="./images/productimage.svg" />
              </div>
            </div>
            <div className="productInfo_mainInfo_right">
              <div className="productInfo_name">前開衩扭結洋裝</div>
              <div className="productInfo_id">201807201824</div>
              <div className="productInfo_color">顏色｜白</div>
              <div className="productInfo_size">尺寸｜M</div>
            </div>
            <div className="cart_remove_mobile">
              <img src="./images/cart-remove.png" />
            </div>
          </div>
          {/* Mobile Version Header */}
          <div className="cart_container_header_mobile">
            <p className="cart_container_title_Amount">數量</p>
            <p className="cart_container_title_Price">單價</p>
            <p className="cart_container_title_totalPrice">小計</p>
          </div>
          {/* Product Amount, Price, Subtotal */}
          <div className="productInfo_mainInfo_numberandremove">
            <select className="productInfo_ProductAmount">
              <option value="1" className="productInfo_ProductAmountSelect">
                1
              </option>
              <option value="2" className="productInfo_ProductAmountSelect">
                2
              </option>
              <option value="3" className="productInfo_ProductAmountSelect">
                3
              </option>
            </select>
            <div className="productInfo_mainInfo_price">
              <div className="productInfo_price">TWD.799</div>
            </div>
            <div className="productInfo_mainInfo_subtotal">
              <div className="productInfo_subtotal">TWD.799</div>
            </div>
            <div className="cart_remove">
              <img src="./images/cart-remove.png" />
            </div>
          </div>
        </div>

        {/* Product Content End */}
        {/* Product Content 1 Start */}
        <div className="checkout_span_mobile">
          <span></span>
        </div>
        <div className="productInfo_mainInfo">
          {/* Product Img, ID, Color, Size */}
          <div className="productInfo_mainInfo_textandimg">
            <div className="productInfo_mainInfo_left">
              <div className="productInfo_img">
                <img src="./images/productimage.svg" />
              </div>
            </div>
            <div className="productInfo_mainInfo_right">
              <div className="productInfo_name">前開衩扭結洋裝</div>
              <div className="productInfo_id">201807201824</div>
              <div className="productInfo_color">顏色｜白</div>
              <div className="productInfo_size">尺寸｜M</div>
            </div>
            <div className="cart_remove_mobile">
              <img src="./images/cart-remove.png" />
            </div>
          </div>
          {/* Mobile Version Header */}
          <div className="cart_container_header_mobile">
            <p className="cart_container_title_Amount">數量</p>
            <p className="cart_container_title_Price">單價</p>
            <p className="cart_container_title_totalPrice">小計</p>
          </div>
          {/* Product Amount, Price, Subtotal */}
          <div className="productInfo_mainInfo_numberandremove">
            <select className="productInfo_ProductAmount">
              <option value="1" className="productInfo_ProductAmountSelect">
                1
              </option>
              <option value="2" className="productInfo_ProductAmountSelect">
                2
              </option>
              <option value="3" className="productInfo_ProductAmountSelect">
                3
              </option>
            </select>
            <div className="productInfo_mainInfo_price">
              <div className="productInfo_price">TWD.799</div>
            </div>
            <div className="productInfo_mainInfo_subtotal">
              <div className="productInfo_subtotal">TWD.799</div>
            </div>
            <div className="cart_remove">
              <img src="./images/cart-remove.png" />
            </div>
          </div>
        </div>
        {/* Product Content End */}
        {/* Product Content 1 Start */}
        <div className="checkout_span_mobile">
          <span></span>
        </div>
        <div className="productInfo_mainInfo">
          {/* Product Img, ID, Color, Size */}
          <div className="productInfo_mainInfo_textandimg">
            <div className="productInfo_mainInfo_left">
              <div className="productInfo_img">
                <img src="./images/productimage.svg" />
              </div>
            </div>
            <div className="productInfo_mainInfo_right">
              <div className="productInfo_name">前開衩扭結洋裝</div>
              <div className="productInfo_id">201807201824</div>
              <div className="productInfo_color">顏色｜白</div>
              <div className="productInfo_size">尺寸｜M</div>
            </div>
            <div className="cart_remove_mobile">
              <img src="./images/cart-remove.png" />
            </div>
          </div>
          {/* Mobile Version Header */}
          <div className="cart_container_header_mobile">
            <p className="cart_container_title_Amount">數量</p>
            <p className="cart_container_title_Price">單價</p>
            <p className="cart_container_title_totalPrice">小計</p>
          </div>
          {/* Product Amount, Price, Subtotal */}
          <div className="productInfo_mainInfo_numberandremove">
            <select className="productInfo_ProductAmount">
              <option value="1" className="productInfo_ProductAmountSelect">
                1
              </option>
              <option value="2" className="productInfo_ProductAmountSelect">
                2
              </option>
              <option value="3" className="productInfo_ProductAmountSelect">
                3
              </option>
            </select>
            <div className="productInfo_mainInfo_price">
              <div className="productInfo_price">TWD.799</div>
            </div>
            <div className="productInfo_mainInfo_subtotal">
              <div className="productInfo_subtotal">TWD.799</div>
            </div>
            <div className="cart_remove">
              <img src="./images/cart-remove.png" />
            </div>
          </div>
        </div>
        {/* Product Content End */}
      </div>
    </>
  );
};
const OrderInfo = () => {
  return (
    <>
      <div className="orderInfo_contentBox">
        <p className="orderInfo_title">訂購資料</p>
        <div className="checkout_span">
          <span></span>
        </div>
        <div className="orderInfo_input_container">
          <div className="orderInfo_name">
            <p className="orderInfo_name">收件人姓名</p>
            <input type="text" className="orderInfo_name_input"></input>
          </div>
          <p className="orderInfo_reminder">
            務必填寫完整收件人姓名，避免包裹無法順利簽收
          </p>
          <div className="orderInfo_phone">
            <p className="orderInfo_phone">手機</p>
            <input type="text" className="orderInfo_phone_input"></input>
          </div>
          <div className="orderInfo_address">
            <p className="orderInfo_address">地址</p>
            <input type="text" className="orderInfo_address_input"></input>
          </div>
          <div className="orderInfo_email">
            <p className="orderInfo_email">Email</p>
            <input type="text" className="orderInfo_email_input"></input>
          </div>
          <div className="orderInfo_time">
            <p className="orderInfo_time">配送時間</p>
            <div className="orderInfo_time_InputAll">
              <input
                type="radio"
                name="time"
                className="orderInfo_time_Input"
              />
              <label className="orderInfo_time_Input_label0">08:00-12:00</label>
              <input
                type="radio"
                name="time"
                className="orderInfo_time_Input"
              />
              <label className="orderInfo_time_Input_label1">14:00-18:00</label>
              <input
                type="radio"
                name="time"
                className="orderInfo_time_Input"
              />
              <label className="orderInfo_time_Input_label2">不指定</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PaymentInfo = () => {
  return (
    <>
      <div className="paymentInfo_contentBox">
        {" "}
        <p className="paymentInfo_title">付款資料</p>
        <div className="checkout_span">
          <span></span>
        </div>
        <div className="paymentInfo_input_container">
          <div className="paymentInfo_cardnumber">
            <p className="paymentInfo_cardnumber">信用卡號碼</p>
            <input
              type="text"
              className="paymentInfo_cardnumber_input"
              placeholder="**** **** **** ****"
            ></input>
          </div>
          <div className="paymentInfo_valid">
            <p className="paymentInfo_valid">有效期限</p>
            <input
              type="text"
              className="paymentInfo_phone_valid"
              placeholder="MM / YY"
            ></input>
          </div>
          <div className="paymentInfo_code">
            <p className="paymentInfo_code">安全碼</p>
            <input
              type="text"
              className="paymentInfo_code_input"
              placeholder="後三碼"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

const Summary = () => {
  return (
    <>
      <div className="summary_contentBox">
        <div className="summary_Area">
          <div className="summaryArea_productsPrice">
            <p>總金額</p>
            <p className="summaryArea_nt">NT.</p>
            <span>2379</span>
          </div>
          <div className="summaryArea_transportPrice">
            <p>運費</p>
            <p className="summaryArea_nt">NT.</p>
            <span>30</span>
          </div>
          <div className="checkout_span">
            <span></span>
          </div>
          <div className="summaryArea_totalPrice">
            <p>應付金額</p>
            <p className="summaryArea_nt">NT.</p>
            <span>2427</span>
          </div>
          <button className="confirm_btn">確認付款</button>
        </div>
        <button className="confirm_btn_mobile">確認付款</button>
      </div>
    </>
  );
};
