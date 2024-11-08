// Random Number between 1 - 6

const button = document.getElementById("myBtn");
const label = document.getElementById("myLabel");
let randomNumber;

button.onclick = function(){
    randomNumber = Math.floor(Math.random() * 6)+1;
    label.textContent = randomNumber;
}


