let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  return (randomChoice = options[Math.floor(Math.random() * options.length)]);
}

function playerSelection() {
  return prompt("Enter one: rock , paper , scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  console.log(
    `player: ${playerSelection} VS computer: ${computerSelection}`
  );
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

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection(), getComputerChoice()));
    console.log("Player Wins", playerWins);
    console.log("Computer Wins", computerWins);
  }
  if (playerWins > computerWins) {
    console.log("Player Beat Computer");
  } else if (computerWins > playerWins) {
    console.log("Computer Beat Player");
  }
}
game();
