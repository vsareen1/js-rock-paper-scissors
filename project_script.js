
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


console.log(getComputerChoice());