class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
     <style>@import 'style/header.css';</style>
     <header class="header">
        <div class="header-bar">
          <div class="logocontainer"><a href=""><img src="images/logo.png" id="logo"></a></div>
    
          <ul class="nav">
            <li class="navClick"><a href="" id="nav-women">女裝</a></li>
            <div class="navsplit"></div>
            <li class="navClick"><a href="" id="nav-men">男裝</a></li>
            <div class="navsplit"></div>
            <li class="navClick"><a href="" id="nav-accessories">配件</a></li>
          </ul>

          <!-- Desktop Searchbar -->
          <div class="search">
            <form name="searchForm" id="searchForm" method="GET">
              <input name="keyword" type="text" id="search" placeholder="Search..." />
              <button type="submit" id="searchbar"><img src="images/search.png"/></button>
            </form>
          </div>
          
          <div class="usericon">
            <div class="cart"><a href="checkout.html"><img src="images/cart.png"><div class="cartnumber_in">0</div></a></div>
            <div class="profile"><img src="images/member.png"></div>
          </div>

          <!-- Mobile Searchbar -->
          <div class="mobilesearch">
            <div class="mobileBarShow">
              <input name="keyword" type="text" id="mobileSearchInput" placeholder="Search..." />
              <img id="mobileClickSearch" src="images/search.png">
            </div>
            <div class="mobileClick">
              <img src="images/search.png">
            </div>
          </div>

        </div>
        <div class="split"></div>
      </header>
      `;
  }
}

customElements.define("header-component", Header);
