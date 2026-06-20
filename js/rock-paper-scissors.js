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