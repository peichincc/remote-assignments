// Q1 
//max([1, 2, 4, 5]); // result to 5
//max([5, 2, 7, 1, 6]); // result to 7

function max(arr){
  var max = arr[0];
  for (var i = 0; i < arr.length; i++ ) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//Q2
//calculate({ n1: 2, n2: 3, op: '+' }); // result to 5
//calculate({ n1: 5, n2: 2, op: '-' }); // result to 3
//calculate({ n1: 1, n2: 6, op: 'x' }); // result to 'Not supported'

function calculate(args) {
  let n1 = args.n1;
  let n2 = args.n2;
  let op = args.op;
  if (op === '+'){
    return n1+n2;
  } else if (op === '-'){
    return n1-n2;
  }else {
    return 'Not supported';
  }
}

//Q3

function calculate(data) {
  let discount = data.discount;
  let products = data.products;
  let sum = 0;
  for(let p of products){
    sum += p.price;
  }
  return (1-discount) * sum;
}

//calculate({
//  discount: 0.1, products: [
//    {name: "Product 1",
//    price: 100 },
//    {
//     name: "Product 2",
//     price: 700 },
//    {
//     name: "Product 3",
//     price: 250 }
//   ]
// }); // show the total price of all products after applying a discount
