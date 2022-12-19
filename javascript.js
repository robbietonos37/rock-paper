function getComputerChoice() {
    let comNum = Math.floor(Math.random() * 3);
    let comChoice = "";
    switch (comNum) {
        case 0:
            comChoice = "rock";
            break;
        case 1:
            comChoice = "paper";
            break;
        case 2:
            comChoice = "scissors";
            break;
    }
    return comChoice;
}

function playRound(playerSelection, comSelection) {
    const decider = playerSelection.toLowerCase();
    console.log(decider);
    if ((decider == "rock" && comSelection == "paper") || (decider == "scissors" && comSelection == "rock" || (decider == "paper" && comSelection == "scissors"))) {
        console.log("Computer chose " + comSelection);
        console.log("You lost! You fucking suck");
    }
    else if (decider === comSelection) {
        console.log("Computer chose " + comSelection);
        console.log("It's a tie");
    }
    else {
        console.log("Computer chose " + comSelection);
        console.log("You fucking won!");
    }

}

//const playerSelection = "roCk";
//const comSelection = getComputerChoice();
//console.log(playRound(playerSelection, comSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose either rock, paper, or scissors");
        let comSelection = getComputerChoice();
        playRound(playerSelection, comSelection);
    }
}

game();
