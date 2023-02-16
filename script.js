let playerWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll(".btn");

let roundResults = "";
const results = document.querySelector(".results");
const winner = document.querySelector(".winner");
const scorePlayer = document.querySelector(".score_player");
const scoreComputer = document.querySelector(".score_computer");
const rounds = document.querySelector(`.rounds`);

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  results.textContent = `player ${playerSelection} VS computer: ${computerSelection}`;
  if (playerSelection === computerSelection) return "Draw";
  const winPairs = {
    paper: "rock",
    scissors: "paper",
    rock: "scissors",
  };
  winPairs[playerSelection] === computerSelection
    ? playerWins++
    : computerWins++;
  return winPairs[playerSelection] === computerSelection
    ? "Player Wins"
    : "Computer Wins";
}

function showResults() {
  rounds.textContent = roundResults;
  scorePlayer.textContent = `Player Wins , ${playerWins}`;
  scoreComputer.textContent = `Computer Wins , ${computerWins}`;
  if (playerWins === 5 && computerWins < 5) {
    winner.textContent = "Player Beat Computer";
  } else if (computerWins === 5 && playerWins < 5) {
    winner.textContent = "Computer Beat Player";
  }
}

function game() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      roundResults = playRound(button.value, getComputerChoice());
      showResults();
    });
  });
}
game();
