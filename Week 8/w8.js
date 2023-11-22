// --- arrow functions ---


// --- high order function HOF --
// function callbackFunction() {
//     console.log(`I am a callback function`);
// }

// function higherOrderFunction(funct) {
//     console.log(`I am a higher-order function
// with a callback function called funct`);

//     funct();
// }

// higherOrderFunction(callbackFunction);

/* In this example, we’ve created a function that is meant to perform a
mathematical operation with two numbers
Inside we are returning the operation, which because it’s a parameter -
it can be changed dynamically
Below are two functions we will use to change the operation
callback function
result1 and result2 are both stored with the value that the
operations (add and subtract) return
In this case, result1 is a sum and result2 is a difference
 */

// Higher-order function that takes two numbers and an operation function
function performOperation(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Usage of the higher-order function
// const result1 = performOperation(5, 3, add); // Calls the "add" function
// const result2 = performOperation(10, 4, subtract); // Calls the "subtract" function

// console.log(result1); // 8
// console.log(result2); // 6

// ------
// Objective: Practice using higher order functions, while also practicing JavaScript methods. Test each one.

/* You have an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
Use higher-order functions like filter and map to
create a new array that includes only the even numbers squared.
Return the final array.
 */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbersSquared = numbers => {
//     return numbers
//         .filter(num => num % 2 === 0) // Filter only even numbers
//         .map(num => num ** 2); // Square each even number
// };
// console.log(evenNumbersSquared(numbers));

/* You have an array of prices: [10.99, 5.49, 12.99, 8.75, 15.20].
Use a higher-order function like reduce to calculate the total
cost after applying a 20% discount to each price.
Return the final total.
 */

// const prices = [10.99, 5.49, 12.99, 8.75, 15.20];
// // Your higher-order function here
// const calculateDiscountedTotal = prices => {
//     return prices.reduce((totalPrice, currentPrice) => {
//         // console.log(`Your total before discount ${totalPrice}`);

//         // return totalPrice + (currentPrice * 0.8);

//         // w/o discount
//         return totalPrice + currentPrice;
//     })
//  };

// console.log(calculateDiscountedTotal(prices));

/* You have an array of words:
["apple", "banana", "cherry", "date", "elderberry"].
Use a higher-order function like find to
find the first word in the array that contains the letter 'a'.
Return the found word.
 */

// const words = ["apple", "banana", "cherry", "date", "elderberry"];
// // Your higher-order function here
// const findWordWithA = words => {
//     return words.find(word => {
//         return word[0] === "a";
//     })
// };

// console.log(findWordWithA(words));


// ----

// const isEven = (number) => {
//     if (number % 2 === 0){
//         return true;
//     }
//     else {
//         false;
//     }
// }
// console.log(isEven(9));

// ----- recursion ---

/* Recursion works similarly to how loops do in JavaScript.
Loops allow you to execute a
set of code multiple times as long as a condition is true. */

// non recursive
// function countDownLoop(num){
//     //starting at num, count down to 0
//    for(let i =num; i > 0; i--){
//     console.log(i)
//    }
//    //after loop has completed
//    console.log("blastoff!")
//   }

//   recursive
// function countDownRecursion(num){
//     //base case - when to stop recursion
//     if(num <= 0){
//       console.log("blastoff!");
//       return
//     }
//     console.log(num)
//     //calls itself, passing the number minus one as argument
//     countDownRecursion(num-1)
//   }
// countDownRecursion(3)

/* Objective: Use recursion to compute the sum of an array of integers.
Create a function that will call itself to compute the
sum of an array of integers */

const sumArray = (arr) => {
    if (arr.length === 0) {
        console.log("Final");
        return 0; // Return 0 when the array is empty
        // return - if left without a number will return NaN
    }

    // with array destruc
    // const [first, ...rest] = arr; // Destructure the array into first and rest

    // with array index
    const first = arr[0];
    const rest = arr.slice(1);

    console.log(first);

    return first + sumArray(rest); // Recursively call sumArray with the rest of the array
};

console.log(sumArray([2, 5, 7]));


// let numArray = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// function sumOfArray(arr) {
//     if (arr.length === 0) {
//         return sum;
//     } else {
//         let num = arr.pop();
//         return num + sumOfArray(arr);
//     };
// };

// console.log(sumOfArray(numArray));

// --- recursion with str ---
// function stringRecursion(str){
//     if(str.length === 0){
//       console.log("no more string")
//       return
//     }

//     str = str.slice(0, -1)
//     console.log(str)
//     stringRecursion(str)
//   }

//   stringRecursion("abc")



