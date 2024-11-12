const textbox = document.getElementById("textbox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

function convert(){
    if(toFarenheit.checked){
        let temp = textbox.value;
        let ans = ((9/5)*temp) + 32;
        result.textContent = ans+"°F";
    }
    else if(toCelcius.checked){
        let temp = textbox.value;
        let ans = ((5/9)*(temp-32));
        result.textContent = ans+"°C";
    }
    else{
        result.textContent = "Select a unit";
    }
}