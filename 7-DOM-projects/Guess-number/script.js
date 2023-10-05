let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.getElementById("guessField");
const pre_guesses = document.querySelector(".pre-guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const inputNum = parseInt(userInput.value);
    console.log(inputNum);
    validNumber(inputNum);
  });
}

function validNumber(inputNum) {
  if (isNaN(inputNum)) {
    alert("please enter a valid number");
  } else if (inputNum < 1) {
    alert("please enter a number 1 or More then 1");
  } else if (isNaN(inputNum > 100)) {
    alert("please enter a number less then 100");
  } else {
    prevGuess.push(inputNum);
    if (numGuess === 11) {
      displayNumber(inputNum);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayNumber(inputNum);
      checkNumber();
    }
  }
}
function checkNumber(inputNum) {
  if (inputNum === randomNumber) {
    displayMessage("You gess it right");
    endGame();
  } else if (inputNum < randomNumber) {
    displayMessage("You guess number to low");
    endGame();
  }
  if (inputNum > randomNumber) {
    displayMessage("You guess number is too high");
    endGame();
  }
}
function displayNumber(inputNum) {
  userInput.value = "";
  pre_guesses.innerHTML += `${inputNum} + `;
  numGuess++;
  lastResult.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2> `;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame" style="background-color: rgb(147, 0, 215); font-size: 35px; border: 2px solid white;">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    pre_guesses.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame();
  });
}
