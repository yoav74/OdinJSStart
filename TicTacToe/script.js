class Grid_piece {
    constructor(index) {
        this.state = "empty";
        this.Gridindex = index;
        this.text = Arr[this.Gridindex].firstChild;
        console.log(this);

    }
    UpdateText() {
        if (this.state == "empty") {
            this.text.textContent = null;
        }
        else {
            this.text.textContent = this.state;
        }
        if (this.state == "X")
            this.text.style.color = "Red";
        else if (this.state == "O")
            this.text.style.color = "Blue";
    }
}

let currTurn = "O";
const currTurnText = document.querySelector(".Curr_turn");
const GridDiv = document.querySelectorAll(".grid_item");
const Arr = Array.from(GridDiv);
const GridArr = []
Arr.forEach((element) => {
    const newText = document.createElement("span");
    element.appendChild(newText);
    const newPiece = new Grid_piece(Arr.indexOf(element));
    GridArr.push(newPiece);
})

function insert(index) {
    if (GridArr[index - 1].state == "empty") {
        GridArr[index - 1].state = `${currTurn}`;
        GridArr[index - 1].UpdateText();
        toggleTurn();
        UpdateUpperText();
        CheckStatus();
    }
    else {
        console.log("This cell is full");
    }
}

function toggleTurn() {
    if (currTurn == "X")
        currTurn = "O";
    else
        currTurn = "X";
}

function UpdateUpperText() {
    currTurnText.textContent = `Current Turn: ${currTurn}`;
}
function UpdateWinner(text, winner) {
    currTurnText.textContent = text;
    if (winner == "O")
        currTurnText.style.color = "Blue";
    else
        currTurnText.style.color = "Red";
    Arr.forEach(element => {
        element.onclick = null;
    })
}
const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6]  // Diagonal from top-right
];

function CheckStatus() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (GridArr[a].state != "empty" && GridArr[a].state === GridArr[b].state && GridArr[a].state === GridArr[c].state) {
            UpdateWinner("Winner : " + GridArr[a].state, GridArr[a].state) // Return the winner ('X' or 'O')
        }
    }
}

function reset() {
    GridArr.forEach(element => {
        element.state = "empty";
        element.UpdateText();
        Arr[GridArr.indexOf(element)].onclick = function () { insert(GridArr.indexOf(element) + 1) };
    })
    currTurn = "O";
    UpdateUpperText();
    currTurnText.style.color = "Black";
}