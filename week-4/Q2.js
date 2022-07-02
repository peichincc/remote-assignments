
var src = "https://appworks-school.github.io/Remote-Aassigiment-Data/products"

function ajax(src, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", src, true);
    request.responseType = "json";
    request.onload = callback
    request.send();
}

function render(data){
  const data = input;
  document.getElementById("json").innerHTML = JSON.stringify(input, undefined, 2);
}


// Question //
function ajax(src, callback) {
// your code here
}
function render(data) {
// your code here
} ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products", 
  function(response) {
    render(response); 
  }
); // you should get product information in JSON format and render data in the page