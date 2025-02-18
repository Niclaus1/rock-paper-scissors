// Rock Paper Scissors GAME
// By Niclaus Go

// Assign initial humanScore && computerScore to 0
let humanScore = 0;
let computerScore = 0;

// create a method for generating random number from 1 to 3
// numbers will define if Rock Paper Scissors
const getComputerChoice = () => {
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
const getHumanChoice = () => {
    let choice = prompt("Choose: rock, paper, scissor");
    let formattedChoice = choice.toLowerCase().trim();
    return formattedChoice;
} 

//creates rock paper scissor logic if one of the player wins, +1 on the player
const playRound = () => {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(); 

    if (humanChoice === computerChoice) {
        console.log("ITS A DRAW");
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
            }else{
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
            }else{
                computerScore++
            }
            break;
        case "scissor":
            if (computerChoice === "paper") {
                humanScore++;
            }else{
                computerScore++;
            }
            break;
    }
    console.log(humanChoice);
    console.log(computerChoice);
    }

//game will run for 5 rounds only, the one who has a greater score WINS.
const gameStart = () => {
    for (let index = 0; index < 5; index++) {
        playRound();
    }
    if (humanScore > computerScore) {
        alert("HUMAN WINS HORAAAY!!");
    }else{
        alert("COMPUTER WINS OHH NOOOOOO");
    }
}

//game test run
gameStart();
console.log(humanScore);
console.log(computerScore);




