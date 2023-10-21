/**shift + alt + a = to get a comment clock
 * alt + click = to get more than one cursor
 *
 */

/* This sections utilizes the DOM and calls the respective html elements
by ID or class
There is six items displayed on the page I have six variables to work here
 */
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const uScore = document.getElementById('user');
const cScore = document.getElementById('computer');


/* Global variables  */
let computerScore = 0;
let userScore = 0;

let userChoice
let computerChoice
let result

/* event handler loop
for each button when it get clicked, it will triger an event listener and
will grab the value (e) of said button, button text then gets saved in the global variable
userChoice and display on the page
generateComputerChoice function gets called followed by
getResult function */
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

/* Rather than hard code the number of options available currently 3, I just set
the random number to be up to the length of buttons, in case a different scenario
requiere to add more features
 */
function generateComputerChoice() {
  //Math.floor gives you a full integer
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  /* Assigns a value to a number and that value gets the computerChoice variable */
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  /* Adds the text of value into the page */
  computerChoiceDisplay.innerHTML = computerChoice
}

/* Compares each variable and gives results accordingly
then add one point to the player
One improvement for later can be if more options are added to the game.
Otherwise the conditionals statements could keep going for a while
 */
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  else if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!';
    userScore += 1;
    uScore.innerHTML = userScore;
  }
  else if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!';
    computerScore += 1;
    cScore.innerHTML = computerScore;
  }
  else if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!';
    userScore += 1;
    uScore.innerHTML = userScore;
  }
  else if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!';
    computerScore += 1;
    cScore.innerHTML = computerScore;
  }
  else if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
    userScore += 1;
    uScore.innerHTML = userScore;
  }
  else if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!';
    computerScore += 1;
    cScore.innerHTML = computerScore;

  }

  resultDisplay.innerHTML = result
}

/* Source
I watched a video and code along so I remeber having it on my repo
said repo was forked provided by  https://github.com/kubowania*/