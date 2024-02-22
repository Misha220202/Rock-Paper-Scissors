const startbtn = document.querySelector('.start');
const rockbtn = document.querySelector('.rock');
const paperbtn = document.querySelector('.paper');
const scissorsbtn = document.querySelector('.scissors');
const results = document.querySelector('.results');
let playerscores = 0, computerscores = 0;

function getCompuerChoice() {
    let number = Math.random();
    number = 3 * number;
    number = Math.floor(number) + 1;
    if (number == 1) return (`rock`);
    else if (number == 2) return (`paper`);
    else return (`scissors`);
}

function playRound(playerSelection, ComputerSelecion) {
    if (playerSelection == ComputerSelecion) {
        return (`Tie`);

    }
    else if (playerSelection == `rock`) {
        if (ComputerSelecion == `paper`) {
            return (`Lose`);
        }
        else {
            return (`Win`);
        }
    }
    else if (playerSelection == `paper`) {
        if (ComputerSelecion == `scissors`) {
            return (`Lose`);
        }
        else {
            return (`Win`);
        }
    }
    else {
        if (ComputerSelecion == `rock`) {
            return (`Lose`);
        }
        else {
            return (`Win`);
        }
    }
}

function showresult(result, playerscores, compuperscores) {
    const p = document.createElement('p');
    p.textContent = `You ${result}, playerscores is ${playerscores}, compuperscores is ${computerscores}.`;
    if (playerscores == 5 || compuperscores == 5) {
        p.textContent += ` The winner is ${playerscores == 5 ? 'player' : 'computer'}`;
    }
    results.appendChild(p);
}

const callBackFuncWrapper = (type) => {
    const func = () => {
        if (playerscores < 5 && computerscores < 5) {
            let y = getCompuerChoice();
            let result = playRound(type, y);
            if (result == `Win`) playerscores++;
            else if (result == `Lose`) computerscores++;
            showresult(result, playerscores, computerscores);
        }
    };
    return func
}

rockbtn.addEventListener('click', callBackFuncWrapper('rock'))

paperbtn.addEventListener('click', callBackFuncWrapper('paper'))

scissorsbtn.addEventListener('click', callBackFuncWrapper('scissors'))

startbtn.addEventListener('click', () => {
    playerscores = 0;
    computerscores = 0;
    while (results.firstChild) results.removeChild(results.firstChild);
})