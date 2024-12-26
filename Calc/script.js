let FirstNum = 0, SecondNum = 0, Operator, textDisplay, totalDisplay, textInput = '';

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function OnLoad() {
    textDisplay = document.querySelector("#Display");
    totalDisplay = document.querySelector("#Display2")
}
function Clear() {
    textDisplay.textContent = '0';
    totalDisplay.textContent = '0';
    FirstNum = 0;
    SecondNum = 0;
    Operator = '0';
    textInput = '';
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return sub(num1, num2);
        case "*":
            return mult(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function UpdateDisplay(char) {
    if(FirstNum != 0 && SecondNum != 0)
        Clear();
    if (Number.isInteger(char)){
        textInput += char;
    }
    else {
        if (FirstNum == 0) {
            FirstNum = Number(textInput);
            totalDisplay.textContent = '';
            totalDisplay.textContent += textInput + " " + char + " ";
            textInput = "";
            Operator = char;
        }
        else if (SecondNum == 0 && char == '=') {
            SecondNum = Number(textInput);
            totalDisplay.textContent += textInput + " = ";
            const result = operate(Operator,FirstNum,SecondNum);
            totalDisplay.textContent += result;
            textDisplay.textContent = result;
            return;
        }
        else {
            console.log("ERROR");
        }
    }
    textDisplay.textContent = textInput;
}