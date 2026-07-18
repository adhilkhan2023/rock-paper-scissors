function getComputerChoice(){
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 3);

  if(randomNumber === 0){
    return "rock";
  }else if(randomNumber === 1){
    return "paper";
  }else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

const display = document.querySelector(".display");
const scoreBoard = document.querySelector(".score-board");

function playRound(event){
  const humanChoice = event.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();

  if(humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"
  ){
    humanScore++;
    display.textContent = `You win the round! ${humanChoice} beats ${computerChoice}`;
  }else if(humanChoice === "scissors" && computerChoice === "rock"
    || humanChoice === "rock" && computerChoice === "paper"
    || humanChoice === "paper" && computerChoice === "scissors"
  ){
    computerScore++;
    display.textContent = `You lose the round! ${computerChoice} beats ${humanChoice}`;
  }else{
    display.textContent = `Tie! ${humanChoice} and ${computerChoice}`;
  }

  scoreBoard.textContent = `Human Score:${humanScore}   Computer Score:${computerScore}`;

  if(humanScore > computerScore){
    display.textContent = `You win the game!`;
  }else if(humanScore < computerScore){
    display.textContent = `You lose the game!`;
  }else{
    display.textContent = `The game is Tie!`;
  }
}

const buttonsContainer = document.querySelector(".container");

buttonsContainer.addEventListener("click", playRound);