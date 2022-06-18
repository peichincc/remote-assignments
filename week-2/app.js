// Welcome change

const welcomechange = document.getElementById('welcome');

welcomechange.addEventListener('click', () => {
  // const welcome = document.getElementById('welcome');
  welcomechange.textContent = `Have a good time!`;
});


// More content -> btn-toggle call to action

const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
  const content = document.querySelector('.row2');
  if (content.style.display === "none"){
    content.style.display = "flex" ;
  } else{
    content.style.display = "none";
  }
});

// aside Menu

// const BurgerIcon = document.querySelector('label');

// BurgerIcon.addEventListener('click', () => {
//   const asideMenu = document.querySelector('.aside_menu');
//   // const mainMenu = document.querySelector('.nav');
//   // mainMenu.remove();

//   asideMenu.style.display = "block";

// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}