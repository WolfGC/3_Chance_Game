let playerWins = 0;
let computerWins = 0;
let count = 0;
let roundResults = "";
let options = ["✊", "✋", "✌️"];

const buttons = document.querySelectorAll(".btn");
const userPick = document.querySelector(".test-player");
const compPick = document.querySelector(".test-computer");
const winner = document.querySelector(".winner");
const scorePlayer = document.querySelector(".score_player");
const scoreComputer = document.querySelector(".score_computer");
const rounds = document.querySelector(`.rounds`);

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  userPick.textContent = `${playerSelection}`;
  compPick.textContent = `${computerSelection}`;
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
    ? "You Win"
    : "Computer Win";
}

function cycleAnimation() {
  let option = options[count];
  userPick.textContent = option;
  compPick.textContent = option;
  count++;
  if (count === options.length) count = 0;
}

function showResults() {
  rounds.textContent = roundResults;
  scorePlayer.textContent = `You : ${playerWins}`;
  scoreComputer.textContent = `Computer : ${computerWins}`;
  playerWins >= 5 && computerWins < 5
    ? (winner.textContent = "You beat the Computer!")
    : computerWins >= 5 && playerWins < 5
    ? (winner.textContent = "Computer Won")
    : "";
}

function game() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const animation = setInterval(cycleAnimation, 100);
      cycleAnimation();
      setTimeout(() => {
        clearInterval(animation);
        roundResults = playRound(button.value, getComputerChoice());
        showResults();
      }, 800);
    });
  });
}
game();
