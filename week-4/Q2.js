function ajax (src, callback){
  fetch(src)
  .then((response) => {
    return response.json();
  })
  .then( (response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  })
}

function render(data){
  let final = document.getElementById("root");
  final.innerHTML = JSON.stringify(data);
}



// var src = "https://appworks-school.github.io/Remote-Aassigiment-Data/products"

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function (){
//   if(xhr.readyState===4){
//     console.log(xhr.responseText);
//   }
// };
// xhr.open('GET', "https://appworks-school.github.io/Remote-Aassigiment-Data/products");
// xhr.send();


// function ajax(src, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function (){
//     if(xhr.readyState === 4){
//       console.log(xhr.responseText);
//     }
//   };
//   xhr.open('GET', src);
//   xhr.onload = callback;
//   xhr.send();
// }

// function ajax(src, callback) {
//   var xhr = new XMLHttpRequest();
//     const request = new XMLHttpRequest();
//     request.open("GET", src);
//     request.responseType = "json";
//     request.onload = callback
//     request.send();
// }

// function render(data){
//   console.log(data);
//   // document.getElementById('root').innerHTML = JSON.stringify(data);
// }


// Question //
function ajax(src, callback) {
// your code here
}
function render(data) {
// your code here
} 

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products", 
  function(response) {
    render(response); 
  }
); // you should get product information in JSON format and render data in the page