/* This module should export a function to fetch
Pokémon data from the Poke API.
The function should use the Async/Await syntax and
return the data as JSON. */

import axios from "axios";

export async function fetchPokemon(pokemon) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (response.status !== 200) {
            throw new Error("Network Error");
        }
        const data = response.data;
        return data;
    } catch(error){
        console.error("Axios error", error);
        throw error;
    }
}



