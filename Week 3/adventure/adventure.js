// function displayImage(imagePath) {
//     const imageContainer = document.getElementById('image-container');
//     const imgElement = document.createElement('img');
//     imgElement.src = imagePath;
//     imgElement.alt = "Image description"; // Provide alt text for accessibility
//     imageContainer.innerHTML = ''; // Clear any previous image
//     imageContainer.appendChild(imgElement); // Append the image to the container
//     imgElement.style.width = '200px'; // e.g., '200px'
//     imgElement.style.height = '200px';
// }


function startGame() {
    let inventory = []
    // ctrl + shift + l to select same word instances
    const playerChoice = prompt("You are a brave warrior that is going to an adventure. Do you go to the town (a) or the woods (b)");

    if (playerChoice === 'a') {
        const playerChoiceA = prompt("In the town you can catch the thief (a) or go to the armory (b)");
        if (playerChoiceA === 'a') {
            alert("You catch the thief and the mayor rewards you with 5 gold coins");
            inventory.push('gold coins');
            // -- img for later use
            // displayImage('test.jpg');
            secondPhase(inventory);
        }
        else if (playerChoiceA === 'b') {
            const playerChoiceA2 = prompt("At the armory you can buy a wooden sword (a) or a boomerang (b)");
            if (playerChoiceA2 === 'a') {
                inventory.push("wooden sword");
                alert("You added a Wooden Sword to your inventory.");
                //alert(` Your inventory consist of ${inventory}`);
                alert("You advance to phase two of the game ");
                secondPhase(inventory);
            }
            else if (playerChoiceA2 === 'b') {
                inventory.push("boomerang");
                alert("You added a boomerang to your inventory.");
                //alert(` Your inventory consist of ${inventory}`);
                alert("You advance to phase two of the game ");
                secondPhase(inventory);
            } else {
                prompt("That option is not valid");
                startAdventure(inventory);
            }
        }

    } else if (playerChoice === 'b') {
        const playerChoiceB = prompt("You enter the woods, you need a weapon. Grab a stick (a) or a rock (b)");

        if (playerChoiceB === 'a') {
            const playerChoiceB1 = prompt("stick")
            inventory.push("stick");
            secondPhase(inventory);
        } else if (playerChoiceB === 'b') {
            const playerChoiceB2 = "rock"
            inventory.push("rock")
            secondPhase(inventory);
        }
    } else {
        prompt("That option is not valid");
        startAdventure();
    }
}

startGame();
