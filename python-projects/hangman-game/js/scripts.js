// scripts.js

// List of words to guess
const words = ["javascript", "hangman", "coding", "programming", "development", "computer", "science"];
let selectedWord;
let guessedLetters;
let wrongGuesses;
let maxAttempts = 6;

// DOM Elements
const wordToGuess = document.getElementById("word-to-guess");
const lettersContainer = document.getElementById("letters-container");
const letterInput = document.getElementById("letter-input");
const guessButton = document.getElementById("guess-button");
const messageDisplay = document.getElementById("message");
const restartButton = document.getElementById("restart-button");
const hangmanCanvas = document.getElementById("hangman");
const ctx = hangmanCanvas.getContext("2d");

// Start a new game
function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongGuesses = 0;
    updateWordDisplay();
    messageDisplay.textContent = "";
    restartButton.style.display = "none";
    drawHangman();
}

// Update the displayed word with guessed letters
function updateWordDisplay() {
    const displayedWord = selectedWord.split("").map(letter => {
        return guessedLetters.includes(letter) ? letter : "_";
    }).join(" ");
    wordToGuess.textContent = "Word: " + displayedWord;
}

// Handle letter guessing
function guessLetter() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = ""; // Clear input

    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            wrongGuesses++;
            drawHangman();
            messageDisplay.textContent = `Wrong guess! You have ${maxAttempts - wrongGuesses} attempts left.`;
        } else {
            messageDisplay.textContent = "Good guess!";
        }
        updateWordDisplay();
        checkGameStatus();
    }
}

// Check if the game is won or lost
function checkGameStatus() {
    if (wrongGuesses >= maxAttempts) {
        messageDisplay.textContent = `Game over! The word was "${selectedWord}".`;
        guessButton.disabled = true;
        restartButton.style.display = "inline-block";
    } else if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
        messageDisplay.textContent = "Congratulations! You've guessed the word!";
        guessButton.disabled = true;
        restartButton.style.display = "inline-block";
    }
}

// Draw the hangman figure based on the number of wrong guesses
function drawHangman() {
    ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);
    ctx.beginPath();
    ctx.moveTo(50, 150); // Base
    ctx.lineTo(150, 150);
    ctx.moveTo(100, 150);
    ctx.lineTo(100, 20); // Pole
    ctx.lineTo(20, 20);
    ctx.lineTo(20, 40); // Top
    ctx.lineTo(100, 40);
    ctx.lineTo(100, 20);
    
    if (wrongGuesses > 0) {
        ctx.moveTo(100, 60);
        ctx.arc(100, 60, 20, 0, Math.PI * 2); // Head
    }
    if (wrongGuesses > 1) {
        ctx.moveTo(100, 80);
        ctx.lineTo(100, 110); // Body
    }
    if (wrongGuesses > 2) {
        ctx.moveTo(100, 90);
        ctx.lineTo(80, 100); // Left Arm
    }
    if (wrongGuesses > 3) {
        ctx.moveTo(100, 90);
        ctx.lineTo(120, 100); // Right Arm
    }
    if (wrongGuesses > 4) {
        ctx.moveTo(100, 110);
        ctx.lineTo(80, 130); // Left Leg
    }
    if (wrongGuesses > 5) {
        ctx.moveTo(100, 110);
        ctx.lineTo(120, 130); // Right Leg
    }
    
    ctx.stroke();
}

// Restart the game
function restartGame() {
    startGame();
    guessButton.disabled = false;
}

// Event Listeners
guessButton.addEventListener("click", guessLetter);
restartButton.addEventListener("click", restartGame);

// Initialize the game
startGame();
