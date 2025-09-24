// hangman.js
const readline = require("readline");

// Word list
const words = ["node", "javascript", "hangman", "programming", "openai"];

// Hangman stages: start with empty gallows → add head → body → arms → legs
const hangmanStages = [
  `
   +---+
   |   |
       |
       |
       |
       |
  =========
`,
  `
   +---+
   |   |
   O   |
       |
       |
       |
  =========
`,
  `
   +---+
   |   |
   O   |
   |   |
       |
       |
  =========
`,
  `
   +---+
   |   |
   O   |
  /|   |
       |
       |
  =========
`,
  `
   +---+
   |   |
   O   |
  /|\\  |
       |
       |
  =========
`,
  `
   +---+
   |   |
   O   |
  /|\\  |
  /    |
       |
  =========
`,
  `
   +---+
   |   |
   O   |
  /|\\  |
  / \\  |
       |
  =========
`,
];

// Pick random word
const word = words[Math.floor(Math.random() * words.length)];
let guessed = Array(word.length).fill("_");
let attempts = 6; // max mistakes
let guessedLetters = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayGame() {
  console.clear();
  console.log(hangmanStages[6 - attempts]); // pick stage by mistakes made
  console.log("Word: " + guessed.join(" "));
  console.log("Attempts left: " + attempts);
  console.log("Guessed letters: " + guessedLetters.join(", "));
}

function askGuess() {
  if (attempts === 0) {
    console.clear();
    console.log(hangmanStages[6]); // full hangman
    console.log(`💀 Game Over! The word was "${word}".`);
    rl.close();
    return;
  }

  if (!guessed.includes("_")) {
    console.clear();
    console.log(`🎉 Congratulations! You guessed the word: "${word}".`);
    rl.close();
    return;
  }

  rl.question("Guess a letter: ", (input) => {
    const letter = input.toLowerCase();

    if (letter.length !== 1 || !/[a-z]/.test(letter)) {
      console.log("❌ Please enter a single letter.");
    } else if (guessedLetters.includes(letter)) {
      console.log("⚠️ You already guessed that letter.");
    } else {
      guessedLetters.push(letter);

      if (word.includes(letter)) {
        console.log("✅ Correct guess!");
        for (let i = 0; i < word.length; i++) {
          if (word[i] === letter) guessed[i] = letter;
        }
      } else {
        console.log("❌ Wrong guess!");
        attempts--;
      }
    }

    displayGame();
    askGuess();
  });
}

// Start game
console.clear();
console.log("🎮 Welcome to Hangman!");
displayGame();
askGuess();
