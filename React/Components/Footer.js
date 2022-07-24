const Footer = ({ cartItemAmount }) => {
  return (
    <>
      <div className="footer">
        <div className="main-footer">
          <ul className="foot">
            <ul className="foot-item">
              <li>
                <a href="#">關於 STYLiSH</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">服務條款</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">隱私政策</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">聯絡我們</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </ul>
          <div className="footicon">
            <div className="line">
              <img src="images/line.png" />
            </div>
            <div className="twitter">
              <img src="images/twitter.png" />
            </div>
            <div className="facebook">
              <img src="images/facebook.png" />
            </div>
          </div>

          <div className="container">
            <div className="mobile-menu">
              <div className="mobile-menu1">
                <li>
                  <a href="#">關於 STYLiSH</a>
                </li>
                <li>
                  <a href="#">服務條款</a>
                </li>
                <li>
                  <a href="#">隱私政策</a>
                </li>
              </div>
              <div className="mobile-menu2">
                <li>
                  <a href="#">聯絡我們</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </div>
              <div className="footicon-mobile">
                <div className="line">
                  <img src="images/line.png" />
                </div>
                <div className="twitter">
                  <img src="images/twitter.png" />
                </div>
                <div className="facebook">
                  <img src="images/facebook.png" />
                </div>
              </div>
            </div>

            <div className="copyright">
              <span> &copy; 2018. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <a href="checkout.html">
          <div className="cart">
            <img className="cartphoto" src="images/cart-mobile.png" />
            <p>購物車</p>
            <div className="cartnumber">{cartItemAmount}</div>
          </div>
        </a>
        <div className="tabsplit"></div>
        <div className="profile">
          <img className="profilephoto" src="images/member-mobile.png" />
          <p>會員</p>
        </div>
      </div>
    </>
  );
};
