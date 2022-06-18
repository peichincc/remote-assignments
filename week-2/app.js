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

// Menu


