let ComputerScore = 0, PlayerScore = 0;
let buttons, ScoreText, WinnerText;
let Img;
let buttonsCpy = document.createElement(null);
const MaxWins = 3;

function RPS(number) {
    let ComputerPick = Math.floor(Math.random() * 3);
    let PickUpdate = "";
    PickUpdate += "Player " + PrintRPS(number);
    PickUpdate += "Computer " + PrintRPS(ComputerPick);
    UpdatePick(PickUpdate);
    if (number != null) {
        if (number == ComputerPick) {
            return UpdateWinner("Draw");
        }
        else if (number == 0 && ComputerPick == 1 || number == 1 && ComputerPick == 2 || number == 2 && ComputerPick == 0) {
            ComputerScore++;
            return UpdateWinner("Computer Won");
        }
        else if (number == 1 && ComputerPick == 0 || number == 2 && ComputerPick == 1 || number == 0 && ComputerPick == 2) {
            PlayerScore++;
            return UpdateWinner("Player Win");
        }
    }
    else
        return -1;
}


function PrintRPS(pick) {
    if (pick == 0)
        return "Picked Rock ";
    if (pick == 1)
        return "Picked Paper "
    if (pick == 2)
        return "Picked Scissors "
}
function DisableButton() {
    buttons = document.querySelector(".container");
    buttonsCpy = buttons.cloneNode(true);
    console.log(buttonsCpy);
    buttons.remove();
}

function AddButton() {
    const MainCont = document.querySelector(".main");
    MainCont.insertBefore(buttonsCpy,document.querySelector("#EndingImage"));
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
function UpdatePick(text) {
    const PickText = document.querySelector("#pick");
    PickText.textContent = text;
}

function Score() {
    if (PlayerScore >= MaxWins) {
        UpdateScore("You are victorious, now go celebrate");
        DisableButton();
        Img.src = "Winner.jpg";
        return;
    }
    else if (ComputerScore >= MaxWins) {
        UpdateScore("Keep your patiance, try again and you shall win");
        DisableButton();
        Img.src = "loser.jpg";
        return;
    }
}

function main(num) {
    if (!Img)
        Img = document.querySelector("#EndingImage");
    if (RPS(num) != -1) {
        console.log("Player Score: " + PlayerScore + '\n' + "Computer Score: " + ComputerScore);
        UpdateScore("Player Score: " + PlayerScore + "      Computer Score: " + ComputerScore);
        Score();
    }
}

function reset() {
    ComputerScore = 0, PlayerScore = 0;
    UpdateScore("Welcome To Rock, Paper, Scissors");
    UpdatePick("");
    UpdateWinner("Best of 5");
    Img.src = "";
    AddButton();
}
