// let button = document.createElement('button');
// button.textContent = 'Click';
// button.addEventListener('click', () => {
//     function randomColor() {
//         let r = Math.floor(Math.random() * 256);
//         let g = Math.floor(Math.random() * 256);
//         let b = Math.floor(Math.random() * 256);
//         return `rgb(${r}, ${g}, ${b})`;
//         }
//     document.body.style.backgroundColor = randomColor();
// });
// document.body.appendChild(button);
let button = document.querySelector("button")

button.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode")


})



