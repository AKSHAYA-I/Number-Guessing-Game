let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = Number(document.getElementById("guess").value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        document.getElementById("message").innerHTML =
            "Please enter a number between 1 and 100";
    }
    else if (userGuess < randomNumber) {
        document.getElementById("message").innerHTML = "Too low! Try again.";
    }
    else if (userGuess > randomNumber) {
        document.getElementById("message").innerHTML = "Too high! Try again.";
    }
    else {
        document.getElementById("message").innerHTML =
            "🎉 Congratulations! You guessed the correct number!";
        document.getElementById("attempts").innerHTML =
            "Total guesses: " + attempts;
    }
}





