console.log('Main loaded');

let dice = document.querySelector("div.dice-1")

let currentRoll = 0;
let attempts = 0;
let diceNmbr = Math.floor(Math.random() * 6) + 1;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
    
}

function startGame() {
    currentRoll = rollDice();
    document.getElementById("currentRoll").textContent = currentRoll;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("resultMessage").textContent = "";
}

function higherOrLower(guess) {
    const nextRoll = rollDice();
    attempts++;

    if ((guess === "higher" && nextRoll > currentRoll) ||
        (guess === "lower" && nextRoll < currentRoll)) {
        currentRoll = nextRoll;
        document.getElementById("currentRoll").textContent = currentRoll;
        document.getElementById("attempts").textContent = attempts;
        document.getElementById("resultMessage").textContent = "Correct guess!";
    } else {
        document.getElementById("resultMessage").textContent = "Incorrect guess. Game Over!";
        document.getElementById("higherBtn").disabled = true;
        document.getElementById("lowerBtn").disabled = true;
    }
}

document.getElementById("higherBtn").addEventListener("click", () => higherOrLower("higher"));
document.getElementById("lowerBtn").addEventListener("click", () => higherOrLower("lower"));

document.getElementById("resetBtn").addEventListener("click", () => {
    currentRoll = 0;
    attempts = 0;
    document.getElementById("currentRoll").textContent = "";
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("resultMessage").textContent = "";
    document.getElementById("higherBtn").disabled = false;
    document.getElementById("lowerBtn").disabled = false;
    startGame();
});

if (diceNmbr === 1) {
    dice.innerHTML = `<div>&#9856;</div>`;
} else if (diceNmbr === 2) {
    dice.innerHTML = `<div>&#9857;</div>`;
} else if (diceNmbr === 3) {
    dice.innerHTML = `<div>&#9858;</div>`;
} else if (diceNmbr === 4) {
    diceNmbr.innerHTML = `<div>&#9859;</div>`;
} else if (diceNmbr === 5) {
    diceNmbr.innerHTML = `<div>&#9860;</div>`;
} else { 
    diceNmbr.innerHTML = `<div>&#9861;</div>`;
};
