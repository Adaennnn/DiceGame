let player1Turn = true;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;

const player1Scoreboard = document.querySelector("#player1Scoreboard");
const player2Scoreboard = document.querySelector("#player2Scoreboard");
const player1Dice = document.querySelector("#player1Dice");
const player2Dice = document.querySelector("#player2Dice");
const message = document.querySelector("#message");
const rollButton = document.querySelector("#rollBtn");
const resetButton = document.querySelector("#resetBtn");

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
}

const hideAndShow = n => {
  message.textContent = `Player ${n} has won!`
  rollButton.style.display = "none"
  resetButton.style.display = "block"
}

const randomNumber = max => {
  return Math.floor(Math.random() * max) + 1;
}

rollButton.addEventListener("click", () => {
  if (player1Turn) {
    scorePlayerOne += randomNumber(6);
    player1Scoreboard.textContent = scorePlayerOne;
    player1Dice.textContent = randomNumber(6);
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    scorePlayerTwo += randomNumber(6);
    player2Scoreboard.textContent = scorePlayerTwo;
    player2Dice.textContent = randomNumber(6);
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (scorePlayerOne >= 20) {
    hideAndShow(1);
  } else if (scorePlayerTwo >= 20) {
    hideAndShow(2)
  }

  player1Turn = !player1Turn
});

resetButton.addEventListener("click", resetGame)