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