function getCompuerChoice() {
    let number = Math.random();
    number = 3 * number;
    number = Math.floor(number) + 1;
    let result;
    if (number == 1) return ("rock");
    else if (number == 2) return ("paper");
    else return ("scissors");
}

function playerChoice() {
    let x = prompt("Please input your selection: ", "");
    x = x.toLowerCase();
    if (x == "rock" || x == "paper" || x == "scissors") return (x);
    else {
        alert("Please input the right words(rock paper scissors).");
        playerChoice();
    }
}

function playRound(playerSelection, ComputerSelecion) {
    if (playerSelection == ComputerSelecion) {
        console.log("tie");
        return (0);

    }
    else if (playerSelection == "rock") {
        if (ComputerSelecion == "paper") {

            console.log("lose");
            return (-1);
        }
        else {

            console.log("win");
            return (1);
        }
    }
    else if (playerSelection == "paper") {
        if (ComputerSelecion == "scissors") {

            console.log("lose");
            return (-1);
        }
        else {

            console.log("win");
            return (1);
        }
    }
    else {
        if (ComputerSelecion == "rock") {

            console.log("lose");
            return (-1);
        }
        else {

            console.log("win");
            return (1);
        }
    }
}

function playGame() {
    let playerscore = 0;
    let computerscore = 0;
    for (let i = 1; i <= 5; i++) {
        let x = playerChoice();
        let y = getCompuerChoice();
        let result = playRound(x, y);
        if (result == -1) computerscore++;
        else if (result == 1) playerscore++;
    }
    console.log(`playerscore = ${playerscore},computerscore = ${computerscore},winner is ${computerscore > playerscore ? 'computer' : (computerscore == playerscore ? 'tie' : 'player')}`)
}

playGame();