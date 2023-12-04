// fetch with Promises
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => {
//         if(!res.ok){
//             throw new Error("Not working");
//         }
//         // json returns a new promise and thats why we need to chain
//         //  a .then
//         return res.json()
//     })
//     .then(data => {
//         console.log(`Response ${data}`)
//     })
//     .catch(error => {
//         console.error(`Error ${error}`)
//     })

// async fetch
// async function fetchData(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         if(!response.ok){
//             throw new Error("Error");
//         }
//         const data = await response.json();
//         return data;
//     }
//     catch(error) {
//         console.error("Error");
//         throw error;
//     }
// }

// console.log(fetchData());

/* Use a fetch API to make a GET request to the following URL:
using Axios
  */
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

