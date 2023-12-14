import fetchData from "./apiCall.js";
import getCharacters from "./characterData.js";
import startGame from "./startGame.js";
import generateTiles from "./generateTiles.js";


// generateTiles();

const appDiv = document.getElementById("app");
startGame(appDiv);