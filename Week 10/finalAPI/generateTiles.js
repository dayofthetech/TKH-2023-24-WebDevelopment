import fetchData from "./apiCall.js";

let count = 0;
let firstClickedImage = null;
let secondClickedImage = null;

export default async function generateTiles() {
    const data = await fetchData();
    const boardGame = [...data, ...data];

    boardGame.forEach((element) => {
        const chartImg = document.createElement("img");
        chartImg.className = "character";
        chartImg.setAttribute("name", element.name);
        chartImg.setAttribute("revealed", "false");

        chartImg.addEventListener("click", () => {
            const revealed = chartImg.getAttribute("revealed");

            if (revealed === "false" && count < 2) {
                // Set the image to revealed
                chartImg.setAttribute("revealed", "true");
                count += 1;

                if (count === 1) {
                    firstClickedImage = chartImg;
                } else {
                    secondClickedImage = chartImg;
                    checkMatch();
                }

                displayCharacterImage(chartImg, element.image);
            }
        });

        const chartDiv = document.getElementById("characters");
        chartDiv.appendChild(chartImg);
    });
}

function displayCharacterImage(imgElement, imageSource) {
    imgElement.src = imageSource;
}

function checkMatch() {
    const name1 = firstClickedImage.getAttribute("name");
    const name2 = secondClickedImage.getAttribute("name");

    if (name1 === name2) {
        console.log("Match!");
    } else {
        console.log("Not a match!");
        setTimeout(() => {
            flipBackImages();
        }, 1000);
    }

}

function flipBackImages() {
    firstClickedImage.setAttribute("revealed", "false");
    secondClickedImage.setAttribute("revealed", "false");

    // Reset for the next turn
    resetTurn();
}

function resetTurn() {
    count = 0;
    firstClickedImage = null;
    secondClickedImage = null;
}
