const myBtn = document.getElementById("myBtn");


function generatePassword(len,lowercase,uppercase,specialchar,number){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=";

    let allowedChars = '';
    let password = '';

    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += specialchar ? specialChars : "";
    allowedChars += number ? numberChars : "";

    if(len < 1){
        window.alert("Password length should be at least 3");
        return "";
    }

    if(allowedChars.length === 0){
        window.alert("At least one type of character have to be selected");
        return "";
    }

    for(let i = 0 ; i < len ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password+= allowedChars[randomIndex];
    }
    return password;
}

function handleGeneratePassword() {
    const pass_length = window.prompt("Enter your password length: (minimum length of password should be 3)");
    const lowercase = true;
    const uppercase = true;
    const specialchar = true;
    const number = true;

    const password = generatePassword(pass_length, lowercase, uppercase, specialchar, number);
    if (password) {
        window.alert(`Generated Password: ${password}`);
    }
}

myBtn.addEventListener("click", handleGeneratePassword);
