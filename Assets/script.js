// rps pseudocode

// Create variables for keeping track of moves, wins, losses and ties.

var numWin = 0;
var numLoss = 0;
var numTie = 0;
var userChoice;
var userMove;
var compChoice;
var compMove;
var result;
var playAgain = true;

function letsPlay() {

    // This section captures the player's move.

    // create popup asking for move
    userChoice = prompt('Choose (R)ock (P)aper or (S)cissors');

    // store move in a variable and converts to uppercase.
    userMove = userChoice.toUpperCase();

    if (userMove !== "R" && userMove !== "P" && userMove !== "S") {
        confirm('Your move of ' + userMove + ' is invalid. Try again?');
        while (playAgain) {
            letsPlay();
        }
    }

    if (userMove == "R") userMove = "Rock"
        else if (userMove == "P") userMove = "Paper"
        else userMove = "Scissors"

    // This section captures a randomized computer move.

    // List possible choices in an array.
    compChoice = ["Rock","Paper","Scissors"];

    // Randomly select from choices and store in a variable. 
    compMove = compChoice[Math.floor(Math.random()*compChoice.length)];

    // This section determines a win, loss or tie, and increases each corresponding total.

    if (userMove === compMove) { numTie++; result = "tied"; }
    else if (userMove === "Rock") { 
        if (compMove === "Paper") { numLoss++; result = "lost"; }
        if (compMove === "Scissors") { numWin++; result = "won"; }
    }
    else if (userMove === "Paper") {
        if (compMove === "Rock") { numWin++; result = "won"; }
        if (compMove === "Scissors") { numLoss++; result = "lost"; }
    }
    else if (userMove === "Scissors") {
        if (compMove === "Rock") { numLoss++; result = "lost"; }
        if (compMove === "Paper") { numWin++; result = "won"; }
    }

    // Keep playing until user quits.

    // This creates a popup with current totals and option to play again.
    playAgain = confirm("You threw " + userMove + ". Computer threw " + compMove + "\nYou " + result + "!\n\nWins: " + numWin + "\nLosses: " + numLoss + "\nTies: " + numTie + "\n\nPlay again?");

    // If true, call playAgain function.
    while (playAgain) {
        letsPlay();
    }
}

    letsPlay();
    


