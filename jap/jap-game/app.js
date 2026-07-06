const wordDatabase = [
  { prompt: "Cat", answerKana: "ねこ", answerRomaji: "neko" },
  { prompt: "Dog", answerKana: "いぬ", answerRomaji: "inu" },
  { prompt: "Water", answerKana: "みず", answerRomaji: "mizu" },
];

let currentWordIndex = 0;
let score = 0;

// 2. DOM Elements
const promptElement = document.getElementById("prompt-word");
const userInput = document.getElementById("user-input");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score-count");

// 3. Functions
function loadNextWord() {
  // Pick a random word from your database
  currentWordIndex = Math.floor(Math.random() * wordDatabase.length);
  promptElement.textContent = wordDatabase[currentWordIndex].prompt;
  userInput.value = ""; // Clear input field
}

function checkAnswer() {
  const currentWord = wordDatabase[currentWordIndex];
  const userGuess = userInput.value.trim().toLowerCase(); // lowercase helps catch romaji variations

  if (userGuess === currentWord.answerKana) {
    feedbackElement.textContent = "Perfect! Kana Bonus! +3 ✨";
    feedbackElement.className = "feedback correct";
    score += 3;
    scoreElement.textContent = score;
    setTimeout(loadNextWord, 100);
  } else if (userGuess === currentWord.answerRomaji) {
    feedbackElement.textContent = "Good! Romaji answer. +1 👍";
    feedbackElement.className = "feedback correct";
    score += 1;
    scoreElement.textContent = score;
    setTimeout(loadNextWord, 100);
  } else {
    feedbackElement.textContent = "Keep trying...";
    feedbackElement.className = "feedback incorrect";
  }
}

// 4. Event Listeners
userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

// Start the game on page load
loadNextWord();
