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

// Create a variable computerScore and
// set its value as 0
let computerScore = 0;


// Create a function showResult
function showResult(){
  // Show the result of the round
  console.log(resultOfTheRound);
}


// Create a function giveScore
function giveScore(){
  // If the letter at 13th index of resultOfTheRound = 'W'
  if(resultOfTheRound.charAt(13) === 'W'){
  // then increment playerScore
    playerScore++
  // Else if the letter at 13th index of resultOfTheRound = 'L'
  }else if(resultOfTheRound.charAt(13) === 'L'){
  // then increment computerScore
    computerScore++
  }
}


// Create a function showWinner
function showWinner(){
  // If playerScore is greater than computerScore
  if(playerScore > computerScore){
  // then show 'You Win the game!! Congrats'
    console.log('You Win the game!! Congrats');
  // Else if computerScore is greater than playerScore
  }else if(computerScore > playerScore){
  // then show 'You Lose the game!! Better luck next time'
    console.log('You Lose the game!! Better luck next time');
  // Else show 'The game is Draw!!'
  }else{
    console.log('The game is Draw!!');
  }
}

// Create a function playGame
function playGame(){
  // Run the first round and
  // Store its result in resultOfTheRound variable
  resultOfTheRound = playRound();
  // Run the function showResult()
  showResult();
  // Run the function giveScore()
  giveScore();

  // Run the second round and
  // Store its result in resultOfTheRound variable
  resultOfTheRound = playRound();
  // Run the function showResult()
  showResult();
  // Run the function giveScore()
  giveScore();

  // Run the third round and
  // Store its result in resultOfTheRound variable
  resultOfTheRound = playRound();
  // Run the function showResult()
  showResult()
  // Run the function giveScore()
  giveScore();

  // Run the fourth round and
  // Store its result in resultOfTheRound variable
  resultOfTheRound = playRound();
  // Run the function showResult()
  showResult()
  // Run the function giveScore()
  giveScore();

  // Run the fifth round and
  // Store its result in resultOfTheRound variable
  resultOfTheRound = playRound();
  // Run the function showResult()
  showResult()
  // Run the function giveScore()
  giveScore()
  // Run the function showWinner()
  showWinner();
}

playGame();