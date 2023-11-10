/* Features to add
[] Add a second button - kick
[] background music
[] Add health bar rather than number

*/

// Add new characters
const characterImages = [
    "./images/characterasset1.png",
    "./images/R_Idle.png",
    "./images/hero.png",
];

// DOM retrieve space where chatr will be displayed
const selectedCharacter = document.querySelector('#characterSelectionOne div img');

let currentCharacterIndex = 0;
// left and right logic
document.getElementById('prevCharacter').addEventListener('click', () => {
    currentCharacterIndex = (currentCharacterIndex - 1 + characterImages.length) % characterImages.length;
    selectedCharacter.src = characterImages[currentCharacterIndex];    selectedCharacterTwo.src = characterImages[currentCharacterIndex];
});

document.getElementById('nextCharacter').addEventListener('click', () => {
    currentCharacterIndex = (currentCharacterIndex + 1) % characterImages.length;
    selectedCharacter.src = characterImages[currentCharacterIndex];
});

// Initialize the selected character image
selectedCharacter.src = characterImages[currentCharacterIndex];


// This function takes care of randomly selecting
// a starting player and display that players name in the game
function randomPlayerStarts() {
    const randomValue = Math.floor(Math.random() * 2);
    console.log(randomValue);

    let playerTurnDisplay = document.getElementById("playerTurn");
    playerTurnDisplay.style = "display: block;";

    if (randomValue === 1) {
        // if number is 1, P1 attacks first
        const firstPlayerAttackButton = document.getElementById("playerOneAttack");
        firstPlayerAttackButton.disabled = false;
        firstPlayerAttackButton.classList.add("active");
        firstPlayerAttackButton.classList.remove("inactive");

        const secondPlayerAttackButton = document.getElementById("playerTwoAttack");
        secondPlayerAttackButton.disabled = true;
        secondPlayerAttackButton.classList.add("inactive");
        secondPlayerAttackButton.classList.remove("active");

        // displaying player 1
        let playerOne = document.getElementById("playerName");
        playerOne.innerHTML = "Player's 1";

    } else {
        const firstPlayerAttackButton = document.getElementById("playerOneAttack");
        firstPlayerAttackButton.disabled = true;
        firstPlayerAttackButton.classList.add("inactive");
        firstPlayerAttackButton.classList.remove("active");
        const secondPlayerAttackButton = document.getElementById("playerTwoAttack");
        secondPlayerAttackButton.disabled = false;
        secondPlayerAttackButton.classList.add("active");
        secondPlayerAttackButton.classList.remove("inactive");

        let playerTwo = document.getElementById("playerName");
        playerTwo.innerHTML = "Player's 2";
    }
}

randomPlayerStarts();



function gameOver(winningPlayerName) {
    let title = document.getElementById("title");
    title.style = "display: none;";
    let playerTurnDisplay = document.getElementById("playerTurn");
    playerTurnDisplay.style = "display: none;";

    // This changes the html text to winning player
    let winningPlayer = document.getElementById("winningPlayer");
    winningPlayer.innerHTML = ` ${winningPlayerName} wins!`

    let gameOverScreen = document.getElementById("gameOverScreen");
    gameOverScreen.style = "display: flex; flex-direction: column;";

    let playerOneAttackButton = document.getElementById("playerOneAttack");
    playerOneAttackButton.disabled = true;

    let playerTwoAttackButton = document.getElementById("playerTwoAttack");
    playerTwoAttackButton.disabled = true;

    // once gameOver - player can click restart
    restart();

}

function attackPlayerOne(){

        function changeButtonStatus() {

        let playerOneAttackButton = document.getElementById("playerOneAttack");
        playerOneAttackButton.disabled = true;
        playerOneAttackButton.classList.add("inactive");
        playerOneAttackButton.classList.remove("active");

        let playerTwoAttackButton = document.getElementById("playerTwoAttack");
        playerTwoAttackButton.disabled = false;
        playerTwoAttackButton.classList.add("active");
        playerTwoAttackButton.classList.remove("inactive");


    }

    // commpartmentalized function that changes the player 1's sprite using the array
    // containing multiple images
    function animatePlayer() {
        // an array containing the images using in player one's animation
        // the indices are later used to cycle / "animate" when the player attacks
        // let playerOneFrames = [
        //     "./images/R_Idle.png",
        //     "./images/R_Attack.png"
        // ];
        // Above is the original sprite - below is the update it player
        // ideally this won't be hardcoded and instead call a function
        // to display charts selected
        let playerOneFrames = [
            "./images/characterasset1.png",
            "./images/characterasset1attack.png"
        ];

        let playerSprite = document.getElementById("playerOneSprite");
        // function we will call in setTimeout, before the frames change back
        // the idle stance
        // in other words, we set to the attack sprite, wait 3 seconds,
        // then set it back to the idle sprite
        playerSprite.src = playerOneFrames[1];

        // removes the 'idle' class from the player sprite
        playerSprite.classList.remove("idle");
        // adds the 'attack' class to the player sprite
        // ** CHECK THE CSS TO NOTE THE CHANGES MADE **
        playerSprite.classList.add("attack");

        // grabs the enemy sprite
        let enemySprite = document.getElementById("playerTwoSprite");
        let enemyDamage = document.getElementById("SFX_PlayerDamage");
        // removes the 'idle' class from the enemy sprite
        enemySprite.classList.remove("idle");
        // adds the 'attack' class to the enemy sprite
        // ** CHECK THE CSS TO NOTE THE CHANGES MADE **
        enemySprite.classList.add("damage");
        // sound that plays when enemy takes damage
        enemyDamage.play();

        // the function we will call in the setTimeOut method below
        // after 350 milliseconds
        // this function will execute this block of code
        function changePlayerOneSprite() {
            enemySprite.classList.remove("damage");
            enemySprite.classList.add("idle");

            playerSprite.src = playerOneFrames[0];
            playerSprite.classList.remove("attack");
            playerSprite.classList.add("idle");
        }

        setTimeout(changePlayerOneSprite, 350);
    }

    //inner fn to do damage to another player

    function doDamage(){
        let playerTwoHealth = document.getElementById("playerTwoHealth");
        // conversts the innerHTML from string to a number and stores it in a variable
        let playerTwoHealthNum = Number(playerTwoHealth.innerHTML);
        // reduces by random num between 1 and 10
        playerTwoHealthNum -= Math.floor(Math.random() * 10);
        // resets the HTML to the new value
        playerTwoHealth.innerHTML = playerTwoHealthNum;

        if(playerTwoHealthNum <= 80){
            gameOver("Player 1");
        }

    }

    animatePlayer();
    changeButtonStatus();
    doDamage();

}

function attackPlayerTwo(){

    function changeButtonStatus() {

        let playerTwoAttackButton = document.getElementById("playerTwoAttack");
        playerTwoAttackButton.disabled = true;
        playerTwoAttackButton.classList.add("inactive");
        playerTwoAttackButton.classList.remove("active");

        let playerOneAttackButton = document.getElementById("playerOneAttack");
        playerOneAttackButton.disabled = false;
        playerOneAttackButton.classList.add("active");
        playerOneAttackButton.classList.remove("inactive");
    }

    function animatePlayer() {
        let playerTwoFrames = [
            "./images/L_Idle.png",
            "./images/L_Attack.png"
        ];

        let playerSprite = document.getElementById("playerTwoSprite");
        playerSprite.src = playerTwoFrames[1];

        // removes the 'idle' class from the player sprite
        playerSprite.classList.remove("idle");
        // adds the 'attack' class to the player sprite
        // ** CHECK THE CSS TO NOTE THE CHANGES MADE **
        playerSprite.classList.add("attack");

        // grabs the enemy sprite
        let enemySprite = document.getElementById("playerOneSprite");
        let enemyDamage = document.getElementById("SFX_PlayerDamage");
        // removes the 'idle' class from the enemy sprite
        enemySprite.classList.remove("idle");
        // adds the 'attack' class to the enemy sprite
        // ** CHECK THE CSS TO NOTE THE CHANGES MADE **
        enemySprite.classList.add("damage");
        // sound that plays when enemy takes damage
        enemyDamage.play();

        // the function we will call in the setTimeOut method below
        // after 350 milliseconds
        // this function will execute this block of code
        function changePlayerTwoSprite() {
            enemySprite.classList.remove("damage");
            enemySprite.classList.add("idle");

            playerSprite.src = playerTwoFrames[0];
            playerSprite.classList.remove("attack");
            playerSprite.classList.add("idle");
        }

        setTimeout(changePlayerTwoSprite, 350);
    }

    function doDamage(){
        let playerOneHealth = document.getElementById("playerOneHealth");
        // conversts the innerHTML from string to a number and stores it in a variable
        let playerOneHealthNum = Number(playerOneHealth.innerHTML);
        // reduces by random num between 1 and 10
        playerOneHealthNum -= Math.floor(Math.random() * 10);
        // resets the HTML to the new value
        playerOneHealth.innerHTML = playerOneHealthNum;

        if(playerOneHealthNum <= 80){
            gameOver("Player 2");
        }
    }


    animatePlayer();
    changeButtonStatus();
    doDamage();
}


/*  */
function restart () {
    let restartBtn = document.getElementById('restartbtn');
    restartBtn.addEventListener('click', () => {
        restartBtn.style.display = 'none'; // Hide the button when clicked
        let playerOneHealth = document.getElementById("playerOneHealth");
        playerOneHealth.innerHTML = '100';
        let playerTwoHealth = document.getElementById("playerTwoHealth");
        playerTwoHealth.innerHTML = '100';

        let fightTitle = document.getElementById('title');
        fightTitle.style.display = 'block';

        let gameOverScreen = document.getElementById("gameOverScreen");
        gameOverScreen.style = "display: none";

        randomPlayerStarts();
    });
    restartBtn.style.display = 'block';
}
