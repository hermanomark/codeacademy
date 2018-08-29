const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock') {
    return userInput;
  }
  else if (userInput === 'paper') {
    return userInput;
  }
  else if (userInput === 'scissors') {
    return userInput;
  }
  else if (userInput === 'bomb') {
    return userInput;
  }
  else {
    return 'Error!! This is not valid';
  }
} 

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3)
  // console.log(number);
  if (randomNumber === 0) {
    return 'rock';
  }
  else if (randomNumber === 1) {
    return 'paper';
  }
  else if (randomNumber === 2) {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Human rules!';
  }
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won';
    }
    else {
      return 'Human won';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won';
    }
    else {
      return 'Human won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won';
    }
    else {
      return 'Human won';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  console.log(userChoice)
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

// https://www.youtube.com/watch?v=3mmQAPt7W2c