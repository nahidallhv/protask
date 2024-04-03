
// // 1. mehsullarin ucuzdan bahaya siralanmasi // //

// let products = [
//     {
//       id: 1,
//       name: "iphone 11",
//       price: 900,
//     },
//     {
//       id: 2,
//       name: "iphone 12",
//       price: 1000,
//     },
//     {
//       id: 3,
//       name: "iphone 11",
//       price: 1100,
//     },
//     {
//       id: 4,
//       name: "iphone 11",
//       price: 1200,
//     },
//   ];
//   products.sort((a, b) => a.price - b.price);
//   console.log(" Sirali Productlar : ");
//   products.forEach(product => console.log(`${product.name} - ${product.price}`));
  

// // 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin // //

// function randomeded() {
//     return Math.floor(Math.random() * 100) + 1; 
// }
// let eded = [];
// for (let i = 0; i < 5; i++) {
//     eded.push(randomeded());
// }
// console.log(" RAndom Ededler: ", eded);
// let cem = 0;
// for (let i = 0; i < eded.length; i++) {
//     cem += eded[i];
// }
// console.log("Random Ededlerin Cemi: ",  cem);


// 3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin
// 4. Json, fetch, api bunlar nedir nece isleyir