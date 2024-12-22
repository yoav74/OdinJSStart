let ComputerScore = 0, PlayerScore = 0;
let button, ScoreText, WinnerText;
const MaxWins = 3;

function RPS() {
    let Player = PlayerPick();
    let ComputerPick = Math.floor(Math.random() * 3);
    if (Player != null) {
        if (Player == ComputerPick) {
            return UpdateWinner("Draw");
        }
        else if (Player == 0 && ComputerPick == 1 || Player == 1 && ComputerPick == 2 || Player == 2 && ComputerPick == 0) {
            ComputerScore++;
            return UpdateWinner("Computer Won");
        }
        else if (Player == 1 && ComputerPick == 0 || Player == 2 && ComputerPick == 1 || Player == 0 && ComputerPick == 2) {
            PlayerScore++;
            return UpdateWinner("Player Win");
        }
    }
    else
        return -1;
}

function PlayerPick() {
    while (true) {
        let num = prompt("Pick Rock, Paper or scissors");
        if (num === null)
            return;
        num = String(num).toLowerCase();
        if (num == "rock")
            return '0';
        else if (num == "paper")
            return '1';
        else if (num == "scissors")
            return '2';
        else {
            console.log("Invalid input " + '\n');
        }
    }
}

function PrintRPS(pick) {
    if (pick == 0)
        return " Picked Rock";
    if (pick == 1)
        return " Picked Paper"
    if (pick == 2)
        return " Picked Scissors"
}
function DisableButton() {
    button.style.backgroundColor = "transparent";
    button.style.border = "0px";
    button.style.color = "transparent";
    button.disabled = true;
}
function UpdateWinner(text) {
    if (!WinnerText)
        WinnerText = document.getElementById("winner");
    WinnerText.textContent = text;
}
function UpdateScore(text) {
    if (!ScoreText)
        ScoreText = document.getElementById("score");
    ScoreText.textContent = text;
}

function Score() {
    if (!button)
        button = document.getElementById("btn");
    if (PlayerScore >= MaxWins) {
        UpdateScore("You are victorious, you cannot play any more");
        DisableButton();
        return;
    }
    else if (ComputerScore >= MaxWins) {
        UpdateScore("Loser, you cannot play any more");
        DisableButton();
        return;
    }
}

function main() {
    if (RPS() != -1) {
        console.log("Player Score: " + PlayerScore + '\n' + "Computer Score: " + ComputerScore)
        Score();
        UpdateScore("Player Score: " + PlayerScore + "      Computer Score: " + ComputerScore);
    }
}
