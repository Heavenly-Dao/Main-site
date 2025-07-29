// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

let currentAnswer = 0;

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get selected mode
function getSelectedMode() {
  return document.getElementById("mode").value;
}

// Difficulty max numbers
const difficultyMax = {
  1: 10,
  2: 25,
  3: 50,
  4: 100,
  5: 150,
  6: 200,
  7: 300,
  8: 400,
  9: 500,
  10: 1000
};

function generateExpressionByModeAndDifficulty(mode, difficulty) {
  const maxNum = difficultyMax[difficulty] || 10;

  const a = randInt(1, maxNum);
  const b = randInt(1, maxNum);
  const c = randInt(1, maxNum);
  const d = randInt(1, maxNum);

  switch (mode) {
    // Single operators:
    case "a": // addition only
      return `${a} + ${b}`;
    case "s": // subtraction only
      return `${a} - ${b}`;
    case "m": // multiplication only
      return `${a} * ${b}`;
    case "d": // division only
      // To avoid fractions, make dividend multiple of divisor:
      const dividend = a * b;
      return `${dividend} / ${b}`;
    case "e": // exponent only
      return `${a} ^ ${randInt(1, 3)}`;
    case "p": // parentheses only, simple:
      return `(${a} + ${b}) - ${c}`;

    // Groups:
    case "basic": // basic combined (ASMD)
      return `${a} + ${b} * ${c} / ${d}`;

    case "algebra":
      // Placeholder, just return a simple linear equation string (future)
      return `${a}x + ${b} = ${c}`;

    case "geometry":
      // Placeholder, maybe area of rectangle, future logic
      return `Area = ${a} * ${b}`;

    case "free": // full PEMDAS mode
    default:
      return `(${a} + ${b}) * (${c} - ${d}) + ${randInt(1, maxNum)}`;
  }
}


// Safe eval with exponents support
function evaluateExpression(expr) {
  // Replace ^ with ** for exponentiation
  const jsExpr = expr.replace(/\^/g, '**');
  try {
    return eval(jsExpr);
  } catch (e) {
    return NaN;
  }
}

function generateExpression() {
  const mode = document.getElementById("mode").value;
  const difficulty = parseInt(document.getElementById("difficulty").value, 10);
  const expr = generateExpressionByModeAndDifficulty(mode, difficulty);
  currentAnswer = evaluateExpression(expr);
  return expr;
}


function newQuestion() {
  const expression = generateExpression();
  document.getElementById("question").innerText = `Solve: ${expression}`;
  document.getElementById("result").innerText = '';
  document.getElementById("userAnswer").value = '';
  document.getElementById("hint").innerText = '';
  document.getElementById("explanation").innerText = '';
}

function checkAnswer() {
  const userInput = parseFloat(document.getElementById("userAnswer").value);
  const resultBox = document.getElementById("result");

  if (isNaN(userInput)) {
    resultBox.innerText = "Please enter a valid number!";
    resultBox.style.color = "orange";
  } else if (Math.abs(userInput - currentAnswer) < 0.001) {
    resultBox.innerText = "Correct!";
    resultBox.style.color = "green";
  } else {
    resultBox.innerText = `Wrong! Correct answer: ${currentAnswer}`;
    resultBox.style.color = "red";

    // Show explanation steps
    document.getElementById("explanation").innerText = explainSteps();
    resultBox.style.color = "red";
  }
}

window.onload = newQuestion;

// Calculator
function toggleCalculator() {
  const calc = document.getElementById("calculator");
  calc.style.display = calc.style.display === "none" ? "block" : "none";
}

function useCalculator() {
  const input = document.getElementById("calcInput").value;
  try {
    const result = eval(input.replace(/\^/g, "**"));
    document.getElementById("calcOutput").innerText = `= ${result}`;
  } catch {
    document.getElementById("calcOutput").innerText = "Invalid expression.";
  }
}

// Hint System
function showHint() {
  const mode = getSelectedMode();
  let hint = "";

  switch (mode) {
    case "AS":
      hint = "Do addition and subtraction left to right.";
      break;
    case "MD":
      hint = "Do multiplication and division left to right.";
      break;
    case "PE":
      hint = "Solve inside parentheses first. Then do exponents.";
      break;
    case "ASMD":
      hint = "Do multiplication/division first, then add/subtract.";
      break;
    case "PEMDAS":
      hint = "Remember: Parentheses > Exponents > MD > AS.";
      break;
  }

  document.getElementById("hint").innerText = `Hint: ${hint}`;
}

// Explain Steps
function explainSteps() {
  const expr = document.getElementById("question").innerText.replace("Solve: ", "");
  let explanation = `Solving: ${expr}\n`;

  try {
    const jsExpr = expr.replace(/\^/g, "**");

    if (expr.includes("(")) explanation += "- Solve inside parentheses first.\n";
    if (expr.includes("^")) explanation += "- Apply exponents next.\n";
    if (expr.includes("*") || expr.includes("/")) explanation += "- Then do multiplication and division left to right.\n";
    if (expr.includes("+") || expr.includes("-")) explanation += "- Finally, do addition and subtraction left to right.\n";

    explanation += `Final Result: ${eval(jsExpr)}`;
  } catch {
    explanation += "Error parsing expression.";
  }

  return explanation;
}

// Enter key behavior for user answer input
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("userAnswer").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkAnswer();
    }
  });

  document.getElementById("calcInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      useCalculator();
    }
  });
});

