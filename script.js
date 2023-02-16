let playerWins = 0;
let computerWins = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const results = document.querySelector('.results');
const winner = document.querySelector('.winner');
const scorePlayer = document.querySelector('.score_player');
const scoreComputer = document.querySelector('.score_computer');
const rounds = document.querySelector(`.rounds`);

//rockBtn.addEventListener('click' , console.log('rock'));

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  return (options[Math.floor(Math.random() * options.length)]);
}

function playerSelection() {
  return prompt("Enter one: rock , paper , scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  // console.log(
  //   `player: ${playerSelection} VS computer: ${computerSelection}`
  // );
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

function game() {
  //for (let i = 0; i < 5; i++) {
    //console.log(playRound(playerSelection(), getComputerChoice()));
    //console.log("Player Wins", playerWins);
    //console.log("Computer Wins", computerWins);
    rounds.textContent = playRound(playerSelection(), getComputerChoice());
    scorePlayer.textContent = ` Player Wins , ${playerWins}`;
    scoreComputer.textContent = ` Computer Wins , ${computerWins}`;
  //}
  if (playerWins > computerWins) {
    //console.log("Player Beat Computer");
    winner.textContent = "Player Beat Computer"
  } else if (computerWins > playerWins) {
    //console.log("Computer Beat Player");
    winner.textContent = "Computer Beat Player"
  }
}
game();
