// Create a function getComputerChoice
function getComputerChoice(){
  // Create a variable randomNumber
  let randomNumber;

  // Generate a random number
  // and store it in randomNumber
  randomNumber = Math.floor(Math.random() * 3);

  // If randomNumber = 0, then return 'rock'
  if(randomNumber === 0){
    return 'rock'
  // Else if randomNumber = 1, then return 'paper'
  }else if(randomNumber === 1){
    return 'paper'
  // Else return 'scissors'
  }else{
    return 'scissors'
  }
}


// Create a variable numberOfTheRound
let numberOfTheRound;
// set the value of numberOfTheRound as 0
numberOfTheRound = 0;


// Create a function playRound
function playRound(playerSelection,computerSelection){
  // Increment the variable numberOfTheRound
  numberOfTheRound++

  // Ask for player's choice and store
  // it in playerSelection
  playerSelection = prompt('Rock, Paper Or Scissors?').toLowerCase();

  // Run the getComputerChoice() and store
  // its value in computerSelection
  computerSelection = getComputerChoice();

  // if playerSelection is 'rock' and computerSelection is 'paper'
  if(playerSelection === 'rock' && computerSelection === 'paper' ||
  // or playerSelection is 'paper' and computerSelection is 'scissors'
    playerSelection === 'paper' && computerSelection === 'scissors' ||
  // or playerSelection is 'scissors' and computerSelection is 'rock'
    playerSelection === 'scissors' && computerSelection === 'rock'
  // then return `Round ${numberOfTheRound}: You Lose! ${computerSelection} beats ${playerSelection}`
  ){
    return `Round ${numberOfTheRound}: You Lose! ${computerSelection} beats ${playerSelection}`
  // Else if playerSelection is 'paper' and computerSelection is 'rock'
  }else if(playerSelection === 'paper' && computerSelection === 'rock' ||
  // or playerSelection is 'scissors' and computerSelection is 'paper'
    playerSelection === 'scissors' && computerSelection === 'paper' ||
  // or playerSelection is 'rock' and computerSelection is 'scissors'
    playerSelection === 'rock' && computerSelection === 'scissors'
  // then return `Round ${numberOfTheRound}: You Win! ${playerSelection} beats ${computerSelection}`
  ){
    return `Round ${numberOfTheRound}: You Win! ${playerSelection} beats ${computerSelection}`
  // Else return `Round ${numberOfTheRound}: Tie! ${playerSelection} and ${computerSelection}`
  }else{
    return `Round ${numberOfTheRound}: Tie! ${playerSelection} and ${computerSelection}`
  }
}

// Create a variable resultOfTheRound
let resultOfTheRound;

// Create a variable playerScore and
// set its value as 0
let playerScore = 0;