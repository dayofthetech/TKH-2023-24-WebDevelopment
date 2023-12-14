import axios from "axios";

export default async function getBerries(){
    const response = await axios.get("https://pokeapi.co/api/v2/berry-flavor/1/")
    return response.data
}
