function getComputerChoice() {
    comNum = Math.floor(Math.random() * 3);
    comChoice = "";
    switch (comNum) {
        case 0:
            comChoice = "Rock";
            break;
        case 1:
            comChoice = "Paper";
            break;
        case 2:
            comChoice = "Scissors";
            break;
    }
    return comChoice;
}

function playRound(playerSelection, comSelection) {
    const decider = playerSelection.toLowerCase();
    //console.log(decider);
}

const playerSelection = "roCk";
const comSelection = getComputerChoice();
console.log(playRound(playerSelection, comSelection));
