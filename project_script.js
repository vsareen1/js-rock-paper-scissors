let humanScore = 0;
let computerScore = 0;
let numberOfDraws = 0;

function getComputerChoice() {
    
    let choiceNumber = Math.floor(Math.random() * 10);
    // To convert values between 0 and 10 have equal probability we will have to create its buckets
    let equalProbabilityValue = 11 / 3;
    let choices = ['rock', 'paper', 'scissors'];
    // Limiting the values between 0 and 2 and providing equal probabilities 
    if (choiceNumber < equalProbabilityValue) {
        choiceNumber = 0;
    } else if ((choiceNumber >= equalProbabilityValue) && (choiceNumber < (equalProbabilityValue * 2))) {
        choiceNumber = 1;
    } else {
        choiceNumber = 2
    }

    return choices[choiceNumber]
}


function getHumanChoice() {
    // function to get the response from the human 
    const humanResponse =window.prompt('Please choose from "rock", "paper", "scissors".');

    return humanResponse;
}


function playRound(humanChoice, computerChoice) {

    const humanResponse = humanChoice.toLowerCase();
    const computerResponse = computerChoice.toLowerCase();

    if (humanResponse === computerResponse) {
        numberOfDraws += 1;

        console.log(`It's a draw. ${humanChoice} is the same as computer's choice ${computerChoice}`);
    } else if (humanResponse === "rock") {
        if (computerResponse === 'paper') {
            humanScore += 0;
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            humanScore += 1;
            computerScore += 0;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    } else if (humanResponse === "paper") {
        if (computerResponse === 'scissors') {
            humanScore += 0;
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            humanScore += 1;
            computerScore += 0;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    } else {
        if (computerResponse === 'rock') {
            humanScore += 0;
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            humanScore += 1;
            computerScore += 0;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    }
} 


function playGame(numberOfRounds = 5) {

    for (let i of [...Array(numberOfRounds).keys()]) {
        const computer = getComputerChoice();
        const human = getHumanChoice();
        playRound(human, computer);
        console.log(`Your score: ${humanScore} Computer's score: ${computerScore}`);
    }

    console.log(`All ${numberOfRounds} have been completed. Final Scores: Human ${humanScore} and Computer ${computerScore} with ${numberOfDraws} draws.`);
}


playGame(numberOfRounds=5);