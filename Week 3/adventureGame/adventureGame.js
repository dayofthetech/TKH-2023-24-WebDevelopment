/**
 * vs shortcut <- alt + click for multiple cursors
 * I'm going to try and keep this game in one flow, meaning all the functions
 * will be here as well as the logic
 * [X] start game function
 * [X] first level function
 * [X] keeping score, + or - functions
 * [X] different endings
 * [] display the text inside the page
 * [] add images
 */

let inventory = [];
let wallet = 0;

function textScenario (text) {
    const textElement = document.getElementById("game-text");
    textElement.textContent = text;
}

function displayImage(imagePath) {
    const imageContainer = document.getElementById('image-container');
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = "Image description"; // Provide alt text for accessibility
    imageContainer.innerHTML = ''; // Clear any previous image
    imageContainer.appendChild(imgElement); // Append the image to the container
    imgElement.style.width = '150px'; // e.g., '200px'
    imgElement.style.height = '150px';
}

function firstLevel () {
    const playerChoice = prompt("Do you fight a forest monster (a) or wind monster (b)");
    if (playerChoice === 'a') {
        inventory.push('wooden sword');
        wallet += 3;
        alert('You defeat the monster and win a wooden sword, move to second level');
         // -- img for later use
        displayImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnICBIpvdyIkHKXd9wlo0RBY4-4iOo4ZUnnw&usqp=CAU');
        // error - Not allowed to load local resource
        // temp fix - img url

        secondLevel();
    } else if (playerChoice === 'b') {
        inventory.push('boomerang');
        wallet += 1;
        alert('You defeat the monster and win a boomerang, move to second level');
        secondLevel();
    } else {
        alert('Wrong input: Game starts again');
    }
}


function secondLevel( ) {
    alert("You are on the second level, new monsters appear!");
    const playerChoice = prompt("Do you battle fire monster (a) or dark monster (b)");
    if (playerChoice === 'a') {
        inventory.push('bombs');
        wallet += 6;
        alert('You defeat and gain bombs, move to third level');
        thirdLevel();
    } else if (playerChoice === 'b') {
        inventory.push('master sword');
        wallet += 10;
        alert('You defeat and gain master sword, move to third level');
        thirdLevel();
    } else {
        alert('Wrong input: Game starts again');
    }
}


function thirdLevel () {
    alert('You are on third level, new monster appear !')
    const playerChoice = prompt("You want to battle rock monsters (a) or regular monster (b)");
    if (playerChoice === 'a') {
        inventory.push('iron boots');
        wallet += 2;
        alert("You defeat and gain iron boots, move to final phase");
        adventureEndings();
    } else if (playerChoice === 'b') {
        inventory.push('Epona');
        wallet += 4;
        alert("You defeat and gain Epona, move to final phase");
        adventureEndings();
    } else {
        alert('Wrong input: Game starts again');
    }
}

function adventureEndings () {
    // compare my items and walet for different endings
    // it checks last item in the array
    alert(`Your inventory has ${inventory.join(', ')} and your wallet has ${wallet} ruppes`);
    if (inventory.includes('wooden sword') && wallet >= 6 ){
        alert('Original ending');
    } else if (inventory.includes('wooden sword') && wallet < 5) {
        alert('Ending #1');
    } else if (inventory.includes('boomerang') && wallet > 6) {
        alert('Ending #2');
    } else if (inventory.includes('bombs') && wallet <= 5) {
        alert('Ending #3');
    } else if (inventory.includes('bombs') && wallet >= 5) {
        alert('Ending #4');
    } else if (inventory.includes('master sword') && wallet >= 10) {
        alert('Ending #5');
    } else if (inventory.includes('iron boots') && wallet <= 5) {
        alert('Ending #6');
    } else if (inventory.includes('Epona') && wallet >= 5) {
        alert('Ending #7');
    } else if (inventory.includes('master sword') && wallet <= 9) {
        alert('Ending #8');
    } else {
        alert('This is a special ending :) ');
    }
}

function startGame() {

    inventory = [];
    wallet = 0;
    firstLevel();
}

