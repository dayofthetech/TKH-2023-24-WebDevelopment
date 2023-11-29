// codecademy lesson 3/11
// const inventory = {
//     sunglasses: 1900,
//     pants: 1088,
//     bags: 1344
//   };

//   // create fn with two param
//   const myExecutor = (resolve, reject) => {
//     if(inventory.sunglasses > 0) {
//       resolve('Sunglasses order processed.');
//     } else {
//       reject('That item is sold out.');
//     }
//   }

//   const orderSunglasses = () => {
//     return new Promise(myExecutor);
//   }

//   const orderPromise = orderSunglasses();
//   console.log(orderPromise);




/* Explanation about success and failure callback
functions with .then */


// const {checkInventory} = require('./library.js');

// // a new array is created, in this example is asking for
// // X number of sunglasses and X number of bags
// const order = [['sunglasses', 10], ['bags', 2]];

// // Write your code below:
// // This is a fn with one parameter that checks success
// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// }

// // fn that checks failure
// const handleFailure = (rejectedValue) => {
//     // the str value is in library
//   console.log(rejectedValue);
// }

// // invoking the main fn that is imported from library.js
// checkInventory(order).then(handleSuccess, handleFailure);


/* Now when we need promises need to be chain
and check for more than one callback
In this example app.js checks for items and balance */

// const {checkInventory, processPayment, shipOrder} = require('./library.js');

// const order = {
//   items: [['sunglasses', 1], ['bags', 2]],
//   giftcardBalance: 79.82
// };

// checkInventory(order)
// .then((resolvedValueArray) => {
//   // Write the correct return statement here:
//  return processPayment(resolvedValueArray);
// })
// .then((resolvedValueArray) => {
//   // Write the correct return statement here:
//   return shipOrder(resolvedValueArray);
// })
// .then((successMessage) => {
//   console.log(successMessage);
// })
// .catch((errorMessage) => {
//   console.log(errorMessage);
// });


