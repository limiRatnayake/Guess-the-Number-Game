let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
   //build constructor Number
   let userGuess = Number(guessField.value);
   if (guessCount === 1) {
      guesses.textContent = "Previous guesses: ";
   }
   guesses.textContent += userGuess + " ";

   if (userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
   } else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!";
      setGameOver();
   } else {
      lastResult.textContent = "Wrong!";
      lastResult.style.backgroundColor = "red";
      if (userGuess > randomNumber) {
         lastResult.textContent = "Last guess was too high!!";
      } else if (userGuess < randomNumber) {
         lastResult.textContent = "Last guess was too low!!";
      }
   }

   guessCount++;
   guessField.value = "";
   guessField.focus();
}

function resetGame() {
   guessCount = 1;

   let resultPara = document.querySelectorAll(".resultParas p");
   for (let i = 0; i < lastResult.length; i++) {
      resetParas[i].textContent = "";
   }

   resetButton.parentNode.removeChild(resetButton);

   guessField.disabled = false;
   guessSubmit.disabled = false;
   guessField.value = "";
   guessField.focus();
   lastResult.style.backgroundColor = "white";
   randomNumber = Math.floor(Math.random() * 100) + 1;
}

function setGameOver() {
   guessField.disabled = true;
   guessSubmit.disabled = true;
   resetButton = document.createElement("button");
   resetButton.textContent = "Start new game";
   document.body.append(resetButton);
   resetButton.addEventListener("click", resetGame);
   guesses.textContent = " ";
}
guessSubmit.addEventListener("click", checkGuess);
