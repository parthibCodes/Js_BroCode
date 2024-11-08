const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");
let count = 0;
increase.onclick = function(){
    countLabel.textContent = count++;
}

reset.onclick = function(){
    countLabel.textContent = 0;
}

decrease.onclick = function(){
    countLabel.textContent = count--;
}