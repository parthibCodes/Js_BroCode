const myCheckbox = document.getElementById("myCheckbox");
const myInput1 = document.getElementById("myInput1");
const myInput2 = document.getElementById("myInput2");
const myInput3 = document.getElementById("myInput3");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const inputResult = document.getElementById("inputResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = "Thanks for SuIIscribing! Proceed to payment process...";
    }
    else{
        subResult.textContent = "Please SuIIscribe first";
    }
    if(myCheckbox.checked && myInput1.checked){
        inputResult.textContent = "Thanks for paying through VISA";
    }
    else if(myCheckbox.checked && myInput2.checked){
        inputResult.textContent = "Thanks for paying through MASTERCARD";
    }
    else if(myCheckbox.checked && myInput3.checked){
        inputResult.textContent = "Thanks for paying through PAYPAL";
    }
    else{
        inputResult.textContent = "Please select a VALID payment gateway";
    }
}