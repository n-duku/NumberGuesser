let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random()*10)
}

function compareGuesses(user, computer, secretTarget) {
    if (user > 9 || user < 0) {
        window.alert('The number entered is not in range')
    } else {
        return Math.abs(user - secretTarget) <= Math.abs(computer- secretTarget)
    }
}

function updateScore (winner) {
    if (winner === 'human') {
        humanScore ++
    } else {computerScore++ }   
}

function advanceRound(){
    currentRoundNumber ++
}
