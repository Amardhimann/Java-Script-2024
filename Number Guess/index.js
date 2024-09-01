// recoded all code with comments so that further use......
// Function to determine if the number is even or odd
function handle(num) {
    if (num % 2 == 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}

// Generate a random number between 1 and 100
var randNum = Math.floor(Math.random() * 100) + 1;
var s = handle(randNum);
console.log(s); // For debugging, shows the result in the console

// Function to handle user's guess
function handle2() { 
    // Check which button was clicked (odd or even)
    var userGuess = this.innerText;

    if (s == userGuess) {
        // User guessed correctly
        document.getElementById("output-message").innerText = "You are Winner ✨";
        document.getElementById("result").innerText = `It Was This Number --> ${randNum}`;
    } else {
        // User guessed incorrectly
        document.getElementById("output-message").innerText = "You are Lose 💔";
        document.getElementById("result").innerText = `It Was This Number --> ${randNum}`;
    }
}

// Attach event listeners to buttons
document.getElementById("odd").addEventListener("click", handle2);
document.getElementById("even").addEventListener("click", handle2);

// Reset button to refresh the page
document.getElementById("reset").addEventListener("click", function() {
    location.reload(); // This will refresh the page
});

// This for reading this by Amardhiman
