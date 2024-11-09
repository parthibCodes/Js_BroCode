// let fullName = "Parthib Codes";
 
// const firsName = fullName.slice(0 , fullName.indexOf(" "));
// const lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log("First name is: " + firsName);
// console.log("Last name is: "+ lastName);


// E-Mail Slicing---->

let email = "raipar@hotmail.com";

let userName = email.slice(0 , email.indexOf("@"));
let symbol = email.slice(email.indexOf("@"), email.indexOf("@")+1);
let domain = email.slice(email.indexOf("@") + 1);

console.log("User name is: " + userName);
console.log("Symbol is: " + symbol);
console.log("DOmain name is: " + domain);

