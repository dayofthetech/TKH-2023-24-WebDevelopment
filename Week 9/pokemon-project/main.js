/* In the main.js file, import the API call function and use it to fetch
Pokémon data. You should be able to specify a Pokémon by ID or name
as an argument to the function.
npm create vite@latest*/

/* path for project completion
[] learn css styling codecademy etc and make sure to comment what each
    part does.
[X] Turn the pokeDiv into grid then img left side / text right side
[X] Text should be on ul il bullet points
[]  Module that handles creating random nums
[]
[] Implement input field where user can fecth specific pokemon
 */

import axios from "axios";

// importing modules
import { fetchPokemon } from "./apiCalls.js";
import generatingPoke from "./generatingPoke.js";
import displayingPoke from "./displayingPoke.js";

// now pokeID is an array of nums
const pokeID = generatingPoke();

/*for every item in my array I will apply map() method which will be
calling the api call and save it in pokemonPromises variable, this variable
are multiple promises waiting to be resolved  */
const pokemonPromises = pokeID.map((pokeID) => fetchPokemon(pokeID));

/*Thats why axios.all() will take care of every Promise, is like a map
iteration but for Promises  */
axios.all(pokemonPromises)

/* the axios.spread() is a utility fn when dealing with multiple Promises
coming from pokemonPromises, it will spread using the 3 dots
the logic into a placeholder array   */

.then(axios.spread((...pokemonDataArray) => {
    const app = document.getElementById("app");


    /*So one thing is dealing with multiple promises which is taken care of by
    axios.spread(), another thing is what are you going to do with each Promise.
    for each Promise a forEach fn with data as paramater, data in this case
    will be the number of the pokemon. Then each number will handle a DOM part
    to create the img and append it to the html */
    pokemonDataArray.forEach((data) => {
        const pokeDiv = document.createElement("div");
        const list = document.createElement("ul");
        pokeDiv.id = 'pokeDiv';
        const pokeObj = {
            name: data.name,
            ID: data.id,
            types: data.types.map(type => type.type.name),
            abilities: data.abilities.map(ability => ability.ability.name),
            height: data.height,
        }
        /* iterate for each obj property, creates an li, assigns text
        to it and append to ul
        key.charAt(0).toUpperCase() + key.slice(1) this takes care of capitalizing
        the first letter of each word property like Name, ID, Type etc

        pokeObj[key] this adds the value info so the pokemon's name etc
        */
        for (const key in pokeObj){
            const pokeInfo = document.createElement("li");
            pokeInfo.id = "pokeInfo";
            pokeInfo.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${pokeObj[key]}`;
            list.appendChild(pokeInfo);
        }


        const pokemonSpriteSrc = data.sprites.front_default;
        const pokemonImg = document.createElement("img");
        pokemonImg.id = "pokemonImg";
        pokemonImg.src = pokemonSpriteSrc;

        pokeDiv.appendChild(pokemonImg);
        pokeDiv.appendChild(list);
        app.appendChild(pokeDiv);





        displayingPoke();
        /* logic for rest of information */
    });
    console.log(pokemonDataArray);
}))
.catch((error) => {
    console.error("Error fetching Pokemon data:", error);
});


