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

function playRound(event){
  const humanChoice = event.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();

  if(humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"
  ){
    humanScore++;
    display.textContent = `You win the round! ${humanChoice} beats ${computerChoice} Human Score:${humanScore}   Computer Score:${computerScore}`;
  }else if(humanChoice === "scissors" && computerChoice === "rock"
    || humanChoice === "rock" && computerChoice === "paper"
    || humanChoice === "paper" && computerChoice === "scissors"
  ){
    computerScore++;
    display.textContent = `You lose the round! ${computerChoice} beats ${humanChoice} Human Score:${humanScore}   Computer Score:${computerScore}`;
  }else{
    display.textContent = `Tie! ${humanChoice} and ${computerChoice} Human Score:${humanScore}   Computer Score:${computerScore}`;
  }

  if(humanScore > computerScore){
    display.textContent = `You win the game! Human Score:${humanScore}   Computer Score:${computerScore}`;
  }else if(humanScore < computerScore){
    display.textContent = `You lose the game! Human Score:${humanScore}   Computer Score:${computerScore}`;
  }else{
    display.textContent = `The game is Tie! Human Score:${humanScore}   Computer Score:${computerScore}`;
  }
}

const buttonsContainer = document.querySelector(".container");

buttonsContainer.addEventListener("click", playRound);