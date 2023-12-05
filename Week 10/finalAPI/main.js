import fetchData from "./apiCall.js";

const data = await fetchData();
console.log(data.attack);
