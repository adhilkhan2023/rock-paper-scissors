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

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(){
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();

    if(humanChoice === "rock" && computerChoice === "scissors"
      || humanChoice === "paper" && computerChoice === "rock"
      || humanChoice === "scissors" && computerChoice === "paper"
    ){
      humanScore++;
      console.log(`You win the round! ${humanChoice} beats ${computerChoice}
Human Score:${humanScore}   Computer Score:${computerScore}`);
    }else if(humanChoice === "scissors" && computerChoice === "rock"
      || humanChoice === "rock" && computerChoice === "paper"
      || humanChoice === "paper" && computerChoice === "scissors"
    ){
      computerScore++;
      console.log(`You lose the round! ${computerChoice} beats ${humanChoice}
Human Score:${humanScore}   Computer Score:${computerScore}`);
    }else{
      console.log(`Tie! ${humanChoice} and ${computerChoice}
Human Score:${humanScore}   Computer Score:${computerScore}`);
    }
  }

  if(humanScore > computerScore){
    console.log(`You win the game!
Human Score:${humanScore}   Computer Score:${computerScore}`);
  }else if(humanScore < computerScore){
    console.log(`You lose the game!
Human Score:${humanScore}   Computer Score:${computerScore}`);
  }else{
    console.log(`The game is Tie!
Human Score:${humanScore}   Computer Score:${computerScore}`);
  }
}

playGame();

const buttonsContainer = document.querySelector(".container");