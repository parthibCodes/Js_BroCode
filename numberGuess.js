let min = 1;
let max = 100;
let guess;
let ans = Math.floor(Math.random() * (max - min + 1)) + min;  // Correctly generates a number between min and max
let attempts = 0;
let running = true;

while (running) {
    guess = window.prompt("Enter your guess: ");
    guess = Number(guess);
    
    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
    } 
    else if (guess < min || guess > max) {
        window.alert(`Please enter a number between ${min} and ${max}.`);
    } 
    else {
        attempts++;
        
        if (guess < ans) {
            window.alert("TOO Low! TRY AGAIN!");
        } 
        else if (guess > ans) {
            window.alert("TOO High! TRY AGAIN!");
        } 
        else {
            window.alert(`YAY! You guessed the number ${ans} correctly! It took you ${attempts} attempts.`);
            running = false;  // Ends the loop since the guess was correct
        }
    }
}
