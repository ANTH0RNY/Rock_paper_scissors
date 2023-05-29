console.log('hello world');
const choices = ['rock','paper','scissors']

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];       
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim()
    computerSelection = computerSelection.toLowerCase().trim()
   if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')){
    return `You Win! ${playerSelection} beats ${computerSelection}`
   }
   else if (playerSelection === computerSelection){
    return 'Its a draw play again'
   }
   else{
    return `You Lose! ${playerSelection} beats ${computerSelection}`
   }
  }

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Make your choice')
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}