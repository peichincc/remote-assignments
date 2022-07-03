function ajax(src, callback) {
  let fetchData = await fetch(src);
  let parseData = await fetchData.json();
  callback(parseData);
}

function render(data){
  let final = document.getElementById("root");
  final.innerHTML = JSON.stringify(data);
}

// All typles of try and error process....

// function ajax (src, callback){
//   const getData = () => fetch(src,
//     {
//       method: "GET", 
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       }
//     }).then(response => response.text())
//     async function main() {
//       let result 
//       try {    
//         result = await getData()
//       } catch(err) {
//         console.log(err)
//       }
//       console.log(result)
//       callback(result)
//     }
//     main()
//   }

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

// fetch('https://appworks-school.github.io/Remote-Aassigiment-Data/products')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

// const getData = () => fetch(src)
// .then(response => response.text())
// async function main() {
//   let result 
//   try {    
//     result = await getData()
//   } catch(err) {
//     console.log(err)
//   }
//   console.log(result)
//   let final = document.getElementById("result");
//   final.innerHTML = result;
// }
// main()

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