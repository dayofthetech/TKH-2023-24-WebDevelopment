import axios from "axios";

export default async function fetchData(){

    try {
        const response = await axios.get("https://marvelcdb.com/api/public/cards/?_format=json");
        if(response.status !== 200){
            throw new Error("Network Error");
          }
        //   console.log(response.data);
          return response.data
    }
    catch(error){
        console.error("Error: " + error)
    }
}

