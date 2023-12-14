import '/style.css'
import getBerries from './api-calls.js';

const berryData = await getBerries();
const berriesArray = await berryData.berries;
console.log(berriesArray)

