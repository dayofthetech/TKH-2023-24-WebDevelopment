/**shift + alt + a = to get a comment clock
 * alt + click = to get more than one cursor
 *
 */

/* resubmition code */
// get DOM elements
let playerChoice = document.getElementById('user-choice');
let computerChoiceG = document.getElementById('computer-choice');
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let uScore = document.getElementById('user');
let cScore = document.getElementById('computer');
let result = document.getElementById('result');
// count the rounds played
let roundsPlayed = 0;
// score tracker
let userScore = 0;
let computerScore = 0;

// Event listeners for user's choice
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

// Function to get computer's choice
// create an array and with the random function select option based on index
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner of a round
function playRound(userChoice) {
  // best of three - change number to increase or decrease rounds
  if (roundsPlayed >= 3) {
    // Check if it's the best of three
    if (userScore > computerScore) {
      result.textContent = 'You win the best of three!';
    } else if (userScore < computerScore) {
      result.textContent = 'Computer wins the best of three!';
    } else {
      result.textContent = 'It\'s a tie in the best of three!';
    }
    // Disable further button clicks
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  } else {
    let computerChoice = getComputerChoice();
    playerChoice.textContent = ` ${userChoice}`;
    computerChoiceG.textContent = ` ${computerChoice}`;
    // console.log(computerChoice);

    if (userChoice === computerChoice) {
      result.textContent = 'It\'s a tie!';
    } else if (
      // comparing all possible outcomes under one else if
      // rock beats scissors or scissors beat paper or paper beats rock
      // anything else would mean the computer won unless tie
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      result.textContent = 'You win this round!';
      userScore++;
    } else {
      result.textContent = 'Computer wins this round!';
      computerScore++;
    }

    roundsPlayed++;
  }

  // Update scores
  uScore.textContent = userScore;
  cScore.textContent = computerScore;
}