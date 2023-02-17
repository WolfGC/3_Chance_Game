let playerWins = 0;
let computerWins = 0;
let count = 0;
let roundResults = "";
let options = ["✊", "✋", "✌️"];

const buttons = document.querySelectorAll(".btn");
const userPick = document.querySelector(".pick-user");
const compPick = document.querySelector(".pick-computer");
const winner = document.querySelector(".winner");
const scorePlayer = document.querySelector(".score_player");
const scoreComputer = document.querySelector(".score_computer");
const rounds = document.querySelector(`.rounds`);

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  userPick.textContent = ` You: ${playerSelection}`;
  compPick.textContent = ` Computer: ${computerSelection}`;
  if (playerSelection === computerSelection) return "Draw";
  const winPairs = {
    "✋": "✊",
    "✌️": "✋",
    "✊": "✌️",
  };
  winPairs[playerSelection] === computerSelection
    ? playerWins++
    : computerWins++;
  return winPairs[playerSelection] === computerSelection
    ? "Player Wins"
    : "Computer Wins";
}

function cycleAnimation(interval) {
  let option = options[count];
  userPick.textContent = option;
  compPick.textContent = option;
  count++;
  if (count === options.length) {
    count = 0;
  }
  console.log(count);
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
      const interval = setInterval(cycleAnimation, 100);
      cycleAnimation();
      setTimeout(() => {
        clearInterval(interval);
        roundResults = playRound(button.value, getComputerChoice());
        showResults();
      }, 800);
    });
  });
}
game();