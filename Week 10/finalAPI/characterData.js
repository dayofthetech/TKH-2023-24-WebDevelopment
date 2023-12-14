import axios from "axios";
import fetchData from "./apiCall.js";



export default async function getCharacters(){
    const data = await fetchData();

    // console.log(data);
    // up to this point I get the items of array
    const characters = data;
    const charactersClone = [...characters, ...characters];

    // this fetches - so a module for click will be here
    charactersClone.forEach((element) => {
        const chartImg = document.createElement('img');
        chartImg.className = "character";
        // the tile char img - but first should be something else
        chartImg.src = element.image;

        const chartDiv = document.getElementById("characters");

        chartDiv.appendChild(chartImg);
        // console.log(element);
    });

}