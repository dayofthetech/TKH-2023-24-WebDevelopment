/*
Quokka.js ext to show the console.log

Math.round = round to the nearest whole number
Math.floor = rounds down, ej 3.99 will be 3
Math.ceil = rounds up, ej 3.12 will be 4
Math.sqrt = square root of a number
Math.min = returns smaller number from a list of args
Math.max

Both .min and .max expect indivudal numbers but we solve this
by using the spread operator
Math.min(...array)

*/

// function calculateNumbers(numbers) {
//     // Calculate and display the sum of all numbers

//     /* reduce takes a callback fn, where accumulator is to store the last returned
//     the value from the last fn call
//     so at first accumulator is 12, then 12+5=17 and so on*/
//     let sum = numbers.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//         // the second arg represents the initial value, in this example
//         // the answer is 44, but if I change 0 to 1 will be 45 and so on
//     }, 0);
//     console.log(`Sum of numbers: ${sum}`);

//     // Calculate and display the maximum number using Math.max

//     let max = Math.max(...numbers);
//     console.log(`Maximum number: ${max}`);

//     // Calculate and display the square root of the minimum number using Math.min

//     let sqrtMin = Math.sqrt(Math.min(...numbers));
//     console.log(`Square root of minimum number: ${sqrtMin}`);
// }

// Example usage:
// let numbers = [12, 5, 8, 16, 3];
// calculateNumbers(numbers);


// const originalString = "He"; // You can use any string you like

// // 1. String Length
// const stringLength = originalString.length;
// console.log(`1. The length of the string is: ${stringLength}`);

// // 2. Convert to Uppercase
// const uppercaseString = originalString.toUpperCase();
// console.log(`2. Uppercase string: ${uppercaseString}`);

// // 3. Convert to Lowercase
// const lowercaseString = originalString.toLowerCase();
// console.log(`3. Lowercase string: ${lowercaseString}`);

// // 4. Accessing Characters by Index (charAt)
// const charAtIndex = originalString.charAt(7); // Get the character at index 7
// console.log(`4. Character at index 7: ${charAtIndex}`);

// // 5. Substring (slice)
// const slicedString = originalString.slice(0, 5); // Get a substring from index 0 to 4
// console.log(`5. Sliced string: ${slicedString}`);


// Exercise #3
/* Write a JavaScript function called countAndReplace()
that takes three parameters:

The function should perform the following steps:
[X]Split the inputText into an array of words.
[X]Count the number of times targetWord appears in the array.
[]Replace all occurrences of targetWord with replaceWord in the array.
Join the modified array of words back into a single string.

Return an object with two properties:
count: The count of targetWord occurrences.
modifiedText: The modified text with replacements. */

/* const inputText = "This is a simple example";
const targetWord = "example";
const replaceWord = "demo";

const result = countAndReplace(inputText, targetWord, replaceWord);

console.log("Count:", result.count);
console.log("Modified Text:", result.modifiedText);


function countAndReplace(inputText, targetWord, replaceWord){

    // count the times simple is found - you can change word
    // console.log(inputText.match(/simple/g).length);

    // using split - this split my whole str into
    //  single str within an array
    let words = inputText.split(" ");

    // I need a var that will keep track of occurences
    let targetWordCount = 0;
    for (i = 0; i < words.length; i++){
        if(words[i] === targetWord){
            targetWordCount += 1;
        }
    }
    newArray = words.join(" ");
    newArray = newArray.replace(targetWord, replaceWord);
    // returning the obj - key:value
    // result is the var assigned to the fn
    return {
        count: targetWordCount,
        modifiedText: newArray
    }
} */



// Exercise #4

/* let array = ["Ada", "Annie", "Grace", "Katherine", "Margaret", "Alan"];

// para
function filterAndMapNames(arr){

    // console.log(a.filter((name) => name.startsWith("A")));
    // let namesWithA = a.filter((name) => name.startsWith("A"));

    // namesWithA.map((phrase) => {
    //     console.log(` Hello ${phrase}`);
    // })

    // chaining methods
    return arr
    .filter((name) => name.toLowerCase().startsWith("a"))
    .map((name) => `Hello ${name}`);
}
// array
const resultArray = filterAndMapNames(array);
console.log(resultArray); */


// ----Intro to Objects----

/* let bike = {
    handlebars: "mustache bars",
    color: "black",
    wheels: 2,
    ride: function rideBike() {
      return `weee this is fun`;
    },
  };

console.log(bike.ride()) // weee this is fun
// you can remove function rideBike and turn it into a annon
// ride: () => {} */

// ----Intro to Classes----

/* class Bike {
    constructor(handlebars, color, numOfWheels) {
        this.handlebars = handlebars;
        this.color = color;
        this.numOfWheels = numOfWheels;
    }
}

//create a new instance of Bike saved into the variable myBike
let myBike = new Bike("flat bars", "purple", 2);
// The reason we use this.handlebars is because at this point we don't
// know the name of the object's name, in a way it will look
// like myBike.handlebars = handlebars */


class Pokemon {
    constructor(name, type, level) {
        this.name = name;
        this.type = type;
        this.level = level;
    }
}

// ---Intro to Methods ---
//We can add methods to an object we declare without a class:
// let bike4 = {
//     handlebars: "mustache bars",
//     color: "black",
//     wheels: 3,
//     ride: function rideBike() {
//       return `weee this is fun`;
//     },
//   };
//   console.log(bike4.ride())

//method in a class
/* class Bike{
    constructor(handlebars, color, wheels){
      this.handlebars = handlebars;
      this.color = color;
      this.wheels = wheels;
    }
      rideBike() {
      return `weee this is fun ${this.color}`;
    }
  }

let newBike = new Bike("flat", "blue", "2");
console.log(newBike.rideBike(newBike.color)); //weee this is fun blue
console.log(newBike.rideBike()); //weee this is fun blue */

/* class Person {
    constructor(name) {
      this.name = name;
    }
    //greet is a method of the Person class
    greet() {
      return `Nice to meet you, my name is ${this.name}!`;
    }
  }
  let ada = new Person("Ada");
  console.log(ada.greet()); // Nice to meet you my name is Ada! */


/*   class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }

    get name() {
      return this._name;
    }

    get department() {
      return this._department;
    }

    get remainingVacationDays() {
      return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }

  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

  console.log(surgeonRomero.name);
  surgeonRomero.takeVacationDays(3);
  console.log(surgeonRomero.remainingVacationDays); */


// codeacademy class exercise - need to go back and make
// notes
/*   class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }

    get name() {
      return this._name;
    }

    get remainingVacationDays() {
      return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }

    static generatePassword() {
      return Math.floor(Math.random()  * 10000);
    }
  }

  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }

    get certifications() {
      return this._certifications;
    }

    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }

  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications); */


// ---Introduction to Iterators---

/* const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(n => {
  return n / 100;
}) */


/* const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers); */


/* const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
//  this returns the first letter of each animal
const secretMessage = animals.map(animal => {
  return animal[0];
})

// then joins the letter to reveal a message
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(n => {
  return n / 100;
}) */

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']


/*
Call the .filter() method on randomNumbers to return values that
are less than 250.
Save them to a new array called smallNumbers,
declared with const. */
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

/* Invoke .filter() on the favoriteWords array to return
elements that have more than 7 characters.
Save the returned array to a
const variable named longFavoriteWords. */

const favoriteWords = [
  'nostalgia', 'hyperbole',
  'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(item => {
  return item.length > 7;
})

//--- findIndex ---

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// returns the animal that matches str
const foundAnimal = animals.findIndex(animal => {
  return animal === "elephant";
})

// returns animal that starts with letter
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
})

// --- reduce() ---

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
/* Replace the word method in the first method call with a
method that will do
something to each of the values in the array and return undefined. */

cities.forEach(city => console.log('Have you visited ' + city + '?'));

//---

// const longCities = cities.filter(city => city.length > 7);

/* In the second method call, replace
the word method with a method that will
return a new array with only those
elements longer than 7 characters. */

// const longCities = cities.filter(city => city.length > 7);


// ---


/* In the third method call,
replace the word method with a method that
accepts an array containing multiple values
and returns a single value. */

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// ---

const nums = [1, 50, 75, 200, 350, 525, 1000]

/* In the fourth method call, replace the word method with a method
that will return a new array of numbers returned from the function. */

const smallerNums = nums.map(num => num - 5);

// ---

/* In the fifth method call, replace the word method with a
method that will return a boolean value. */

nums.some(num => num < 0);



