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

function playRound(playerSelection,computerSelection){
  computerSelection = getComputerChoice();

  if(playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock'
  ){
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }else if(playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'rock' && computerSelection === 'scissors'
  ){
    return `You Win! ${playerSelection} beats ${computerSelection}`
  }else{
    return `Tie! ${playerSelection} and ${computerSelection}`
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

const rockButton = document.querySelector('.rock-button');

const paperButton = document.querySelector('.paper-button');

const scissorsButton = document.querySelector('.scissors-button');