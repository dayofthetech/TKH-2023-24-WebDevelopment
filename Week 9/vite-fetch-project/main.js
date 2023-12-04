import './style.css'
import axios from "axios"

async function fetchRandomCatImage(){
    try {
        // make a GET request
        const response = await
        axios.get("https://cataas.com/cat?json=true");

        if(response.status !== 200) {
            throw new Error("Error");
        }

        const data = response.data;
        return data

    }
    catch(error) {
        throw error
    }
}
console.log(fetchRandomCatImage());

