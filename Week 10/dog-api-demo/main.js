import fetchData from "./api-call.js";


// add the await in order to turn the promise into data
const data = await fetchData();

const arrayOfDogPics = data.message


arrayOfDogPics.forEach((dogImgUrl)=>{
  //run whatever code is here for each element in the array
  //use DOM method to display image
  const newImg = document.createElement("img")
  newImg.src = dogImgUrl;
  document.body.append(newImg)

})
