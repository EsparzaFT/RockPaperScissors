let humanScore = 0;
let computerScore = 0;
let game = 1;

function getComputerChoice(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    const humanNumber = prompt("Write your play").toLowerCase();

    if (humanNumber === "rock") {
        return "rock";
    } else if (humanNumber === "paper") {
        return "paper";
    } else if (humanNumber === "scissors") {
        return "scissors";
    } else {
        return "Add an entry valid"
    }
}


function playGame(human, computer) {

    function playRound() {
        console.log(`Human: ${human} \nComputer: ${computer}`)

        if (human == computer) {
            console.log('Empty');
            computerScore++;
            humanScore++;
        } else if (human == "rock" && computer == "paper") {
            console.log("Result: Win cumputer");
            computerScore++;
        } else if (human == "paper" && computer == "rock") {
            console.log("Result: Win Human");
            humanScore++;
        } else if (human == "rock" && computer == "scissors") {
            console.log("Result: Win Human");
            humanScore++;
        } else if (human == "scissors" && computer == "rock") {
            console.log("Result: Win cumputer");
            computerScore++;
        } else if (human == "scissors" && computer == "paper") {
            console.log("Result: Win Human");
            humanScore++;
        } else if (human == "paper" && computer == "scissors") {
            console.log("Result: Win cumputer");
            computerScore++;
        } else {
            console.log('Result: Need add an entry valid')
        }
        console.log(`Points Human: ${humanScore} and Computer: ${computerScore}\n`);
    }
    playRound();
}


while (game <= 5) {
    playGame(getHumanChoice(), getComputerChoice(1, 3));
    game++;
}


if (humanScore === computerScore) {
    console.log('Empty');
} else if(humanScore > computerScore){
    console.log('WOW! You Win =D');
} else{
    console.log('Sorry, you LOSE');
}
