// Create a function named getComputerChoice.
function getComputerChoice(){
  // Create a variable with name as randomNumber.
  let randomNumber;

  // Generate a random number between 0 and 3.
  // Store the random number in the variable randomNumber.
  // Round down the value of randomNumber to the nearest whole number.
  // Store that number in variable randomNumber.
  randomNumber = Math.floor(Math.random() * 3);

  // If the value of variable randomNumber is 0
  if(randomNumber === 0){
    // Then return the value "rock"
    return "rock";
    // Else if the value of variable randomNumber is 1
  }else if(randomNumber === 1){
    // Then return the value "paper"
    return "paper";
    // Else then return the value "scissors"
  }else {
    return "scissors";
  }
}


// Create a function named getHumanChoice.
function getHumanChoice(){
  // Declare a variable named humanChoice.
  // Ask the user "Rock", "Paper" or "Scissors" and then show a input box.
  // When the user enters a word,
  // Store that word in the variable humanChoice.
  let humanChoice = prompt("Rock, Paper or Scissors?");
  // Return the value inside humanChoice.
  return humanChoice;
}


// Create a variable named humanScore.
// Give the variable humanScore the value 0.
let humanScore = 0;
// Create a variable named computerScore.
// Give the variable computerScore the value 0.
let computerScore = 0;


//Create a function named playRound.
//Give the playRound function two parameters, humanChoice and computerChoice.
function playRound(humanChoice, computerChoice){
  //Convert the value of the humanChoice variable to lowercase.
  //Store that value in the variable humanChoice.
  humanChoice = humanChoice.toLowerCase();

  //If the value of the variable humanChoice is rock and the value of the variable computerChoice is scissor
  //Or the value of the variable humanChoice is paper and the value of the variable computerChoice is rock
  //Or the value of the variable humanChoice is scissor and the value of the variable computerChoice is paper
  if(humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"
  ){
    //Increment the value of the variable humanScore by 1.
    humanScore++;
    //Then print "You win! ${humanChoice} beats ${computerChoice}".
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  //Else if the value of the variable humanChoice is scissor and the value of the variable computerChoice is rock   
  //Or the value of the variable humanChoice is rock and the value of the variable computerChoice is paper
  //Or the value of the variable humanChoice is paper and the value of the variable computerChoice is scissor
  }else if(humanChoice === "scissors" && computerChoice === "rock"
    || humanChoice === "rock" && computerChoice === "paper"
    || humanChoice === "paper" && computerChoice === "scissors"
  ){
    //Increment the value of the variable computerScore by 1.
    computerScore++;
    //Then print "You lose! ${computerChoice} beats ${humanChoice}".
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    //Else then print "Tie! ${humanChoice} and ${computerChoice}".
  }else{
    console.log(`Tie! ${humanChoice} and ${computerChoice}`);
  }
}
 
//Create a constant variable humanSelection
//and assign it the return value of the function getHumanChoice.
const humanSelection = getHumanChoice();
//Else then print "Tie! ${humanChoice} and ${computerChoice}".
//Create a constant variable computerSelection
//and assign it the return value of the function getComputerChoice.
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);