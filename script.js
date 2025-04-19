let humanScore = 0;
let computerScore = 0;
let game = 1;

/**
 * Generates a random integer between min and max (inclusive)
 * and returns the corresponding Rock/Paper/Scissots choice.
 * @param {number} min - Minimum value (1).
 * @param {number} max - Maximum value (3)
 * @returns {string} "rock", "paper", or "scissors".
 */
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

/**
 * Prompts the user for input and validates it.
 * @returns {string} Validated choice ("rock", "paper", "scissors")
 *                  or an error message if invalid 
 */
function getHumanChoice() {
    const humanNumber = prompt("Write your play").toLowerCase();

    if (humanNumber === "rock") {
        return "rock";
    } else if (humanNumber === "paper") {
        return "paper";
    } else if (humanNumber === "scissors") {
        return "scissors";
    } else {
        return "Add a valid entry";
    }
}

/**
 * Compares human and computer choices to determine the round winner,
 * updates scores, and logs results.
 * @param {string} human - Human's choice
 * @param {string} computer - Computer's choice 
 */
function playGame(human, computer) {

    function playRound() {
        console.log(`Human: ${human} \nComputer: ${computer}`)

        if (human == computer) {
            console.log('Tie!');
            computerScore++;
            humanScore++;
        } else if (human == "rock" && computer == "paper") {
            console.log("Result: Win computer");
            computerScore++;
        } else if (human == "paper" && computer == "rock") {
            console.log("Result: Win Human");
            humanScore++;
        } else if (human == "rock" && computer == "scissors") {
            console.log("Result: Win Human");
            humanScore++;
        } else if (human == "scissors" && computer == "rock") {
            console.log("Result: Win computer");
            computerScore++;
        } else if (human == "scissors" && computer == "paper") {
            console.log("Result: Win Human");
            humanScore++;
        } else if (human == "paper" && computer == "scissors") {
            console.log("Result: Win computer");
            computerScore++;
        } else {
            console.log('Result: Pleas enter a valid choice')
        }
        console.log(`Points Human: ${humanScore} and Computer: ${computerScore}\n`);
    }
    playRound();
}

// Loop to play five rounds of the game
while (game <= 5) {
    playGame(getHumanChoice(), getComputerChoice(1, 3));
    game++;
}

// Determine the final winner
if (humanScore === computerScore) {
    console.log('It\'s a tie!');
} else if(humanScore > computerScore){
    console.log('WOW! You Win =D');
} else{
    console.log('Sorry, you lose');
}
