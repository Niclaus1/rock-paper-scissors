// Rock Paper Scissors

// Assign int humanScore && computerScore to 0
let humanScore = 0;
let computerScore = 0;

// create a method for generating random number from 1 to 3
// numbers will define if Rock Paper Scissors
function getComputerChoice(){
    let number = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch (number) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissor"
            break;
    }
}

//users are given a choice by typing rock paper scissors
function getHumanChoice(){
    let choice = prompt();
    let formattedChoice = choice.toLowerCase().trim();
    return formattedChoice;
}

//creates rock paper scissor logic if one of the player wins, +1 on the player
function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(); 

    if (humanChoice === computerChoice) {
        console.log("ITS A DRAW");
    }
    else if (humanChoice === "rock" && computerChoice === "paper" ) {
        console.log("Computer wins");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor" ) {
        console.log("human wins");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock" ) {
        console.log("human wins");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor" ) {
        console.log("computer wins");
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock" ) {
        console.log("computer wins");
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper" ) {
        console.log("human wins");
        humanScore++;
    }

    console.log(humanChoice);
    console.log(computerChoice);
    }

function gameStart(){
    for (let index = 0; index < 5; index++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("HUMAN WINS HORAAAY!!");
    }else{
        console.log("COMPUTER WINS OHH Nooooo");
    }
}

gameStart();
console.log(humanScore);
console.log(computerScore);




