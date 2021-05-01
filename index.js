let player1Turn = true;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let rollCount = 0;

const player1Scoreboard = document.querySelector("#player1Scoreboard");
const player2Scoreboard = document.querySelector("#player2Scoreboard");
const player1Dice = document.querySelector("#player1Dice");
const player2Dice = document.querySelector("#player2Dice");
const message = document.querySelector("#message");
const rollButton = document.querySelector("#rollBtn");
const resetButton = document.querySelector("#resetBtn");
const doubleButton = document.querySelector("#doubleBtn");

const resetGame = () => {
  message.textContent = "Player 1 Turn";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  player1Turn = true;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  resetButton.style.display = "none";
  rollButton.style.display = "block";
  doubleButton.style.display = "block";
  rollCount = 0;
}

const hideAndShow = n => {
  message.textContent = `Player ${n} has won!`;
  rollButton.style.display = "none";
  doubleButton.style.display = "none";
  resetButton.style.display = "block";
}

const randomNumber = max => {
  return Math.floor(Math.random() * max) + 1;
}

const randomNumberDouble = (max, n) => {
  return (Math.floor(Math.random() * max) + 1) * n;
}

rollButton.addEventListener("click", () => {
  rollCount += 1
  const rollRandom = randomNumber(6);
  if (player1Turn) {
    scorePlayerOne += rollRandom;
    player1Scoreboard.textContent = scorePlayerOne;
    player1Dice.textContent = rollRandom;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    scorePlayerTwo += rollRandom;
    player2Scoreboard.textContent = scorePlayerTwo;
    player2Dice.textContent = rollRandom;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (scorePlayerOne >= 20 && rollCount % 2 == 0) {
    hideAndShow(1);
  } else if (scorePlayerTwo >= 20 && rollCount % 2 == 0) {
    hideAndShow(2)
  }

  player1Turn = !player1Turn
});

doubleButton.addEventListener("click", () => {
  rollCount += 1
  const random = Math.random();
  const doubleRandom = randomNumberDouble(6,2);

  if (player1Turn && random > 0.5) {
    scorePlayerOne += doubleRandom;
    player1Scoreboard.textContent = scorePlayerOne;
    player1Dice.textContent = doubleRandom;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else if (player1Turn && random < 0.5) {
    scorePlayerOne = 0;
    player1Scoreboard.textContent = scorePlayerOne;
    player1Dice.textContent = 0;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else if (!player1Turn && random > 0.5) {
    scorePlayerTwo += doubleRandom;
    player2Scoreboard.textContent = scorePlayerTwo;
    player2Dice.textContent = doubleRandom;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  } else if (!player1Turn && random < 0.5) {
    scorePlayerTwo = 0;
    player2Scoreboard.textContent = scorePlayerTwo;
    player2Dice.textContent = 0;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (scorePlayerOne >= 20 && rollCount % 2 == 0) {
    hideAndShow(1);
  } else if (scorePlayerTwo >= 20 && rollCount % 2 == 0) {
    hideAndShow(2)
  }

  player1Turn = !player1Turn
})

resetButton.addEventListener("click", resetGame)