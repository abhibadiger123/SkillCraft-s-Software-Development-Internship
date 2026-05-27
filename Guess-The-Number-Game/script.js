let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let bestScore = localStorage.getItem("bestScore") || 0;

document.getElementById("bestScore").innerHTML = bestScore;

function checkGuess() {

    let guess = Number(document.getElementById("guessInput").value);

    let result = document.getElementById("result");

    if (!guess || guess < 1 || guess > 100) {

        result.innerHTML = "⚠️ Please enter a number between 1 and 100.";

        return;
    }

    attempts++;

    document.getElementById("attempts").innerHTML = attempts;

    if (guess === randomNumber) {

        result.innerHTML = `🎉 Correct! The number was ${randomNumber}`;

        if (bestScore == 0 || attempts < bestScore) {

            bestScore = attempts;

            localStorage.setItem("bestScore", bestScore);

            document.getElementById("bestScore").innerHTML = bestScore;
        }
    }

    else if (guess < randomNumber) {

        result.innerHTML = "📉 Too Low! Try Again.";
    }

    else {

        result.innerHTML = "📈 Too High! Try Again.";
    }
}

function restartGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("attempts").innerHTML = attempts;

    document.getElementById("guessInput").value = "";

    document.getElementById("result").innerHTML = "Start guessing...";
}

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}