const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age>=100){
        resultElement.textContent = "You are too old!";
    }
    else if(age == 0){
        resultElement.textContent = "Why this Gendu generation kids too nigga???";
    }
    else if(age>=18){
        resultElement.textContent = "Hey you are now become eligible for officialy 18+ things!!!";
    }
    else if(age<18 && age >0){
        resultElement.textContent = "Go to School you littledick";
    }
    else{
        resultElement.textContent = "Give a valid age you gay";
    }
}