import getCharacters from "./characterData.js";
import generateTiles from "./generateTiles.js";

export default function startGame(target){
    const startBtn = document.createElement("button");
    startBtn.innerText = "Start Game!";

    startBtn.addEventListener("click", ()=> {
        // getCharacters();
        generateTiles();
    })
    target.appendChild(startBtn);
    return startBtn;
}

