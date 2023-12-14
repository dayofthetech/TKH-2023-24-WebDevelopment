import axios from "axios";

export default async function fetchData(){

    try {
        // character/1,2,3,4 is temp to test data, once complete user will be able to pick X num of characters
        const response = await axios.get("https://rickandmortyapi.com/api/character/[1,2,3,4]");
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

