function getComputerChoice(){
  let randomNumber;

  randomNumber = Math.floor(Math.random() * 3);

  if(randomNumber === 0){
    return 'rock'
  }else if(randomNumber === 1){
    return 'paper'
  }else{
    return 'scissors'
  }
}

let numberOfTheRound;
numberOfTheRound = 0;

function playRound(playerSelection,computerSelection){
  numberOfTheRound++

  playerSelection = prompt('Rock, Paper Or Scissors?').toLowerCase();

  computerSelection = getComputerChoice();

  if(playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock'
  ){
    return `Round ${numberOfTheRound}: You Lose! ${computerSelection} beats ${playerSelection}`
  }else if(playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'rock' && computerSelection === 'scissors'
  ){
    return `Round ${numberOfTheRound}: You Win! ${playerSelection} beats ${computerSelection}`
  }else{
    return `Round ${numberOfTheRound}: Tie! ${playerSelection} and ${computerSelection}`
  }
}

let resultOfTheRound;

let playerScore = 0;

let computerScore = 0;

function giveScore(){
  if(resultOfTheRound.charAt(13) === 'W'){
    playerScore++
  }else if(resultOfTheRound.charAt(13) === 'L'){
    computerScore++
  }
}

function showWinner(){
  if(playerScore > computerScore){
    console.log('You Win the game!! Congrats');
  }else if(computerScore > playerScore){
    console.log('You Lose the game!! Better luck next time');
  }else{
    console.log('The game is Draw!!');
  }
}