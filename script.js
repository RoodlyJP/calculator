// Add function
function add(number1, number2) {
    return number1 + number2;
}
// Substract function
function substract(number1, number2) {
    return number1 - number2;
}
// Multiply function
function multiply(number1, number2) {
    return number1 * number2;
}
// Divid function
function divid(number1, number2) {
    return number1 / number2;
}

let number1 = "";
let number2 = "";
let operator = null;
let isEqualPressed = false;

let screen = document.querySelector("#screen-text");

function operate(chosenOperator, chosenNumber1, chosenNumber2) {
    chosenNumber1 = Number(chosenNumber1);
    chosenNumber2 = Number(chosenNumber2);
    switch(chosenOperator) {
        case "+": return add(chosenNumber1, chosenNumber2);
        case "-": return substract(chosenNumber1, chosenNumber2);
        case "*": return multiply(chosenNumber1, chosenNumber2);
        case "/": return divid(chosenNumber1, chosenNumber2);
    }
}

function updateScreen(number) {
    screen.textContent = number;
}
function clear() {
    number1 = "";
    number2 = "";
    operator = null;
}

function updateButton(e) {
    let numb = e.target.textContent
        switch(numb) {
            case ".":
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9": {
                if(isEqualPressed) {
                    clear();
                    number1 = number1 + numb;
                    updateScreen(number1);
                    isEqualPressed = false;
                } else {
                    if(operator == null) {
                        number1 = number1 + numb;
                        updateScreen(number1);
                    } else {
                        number2 = number2 + numb;
                        updateScreen(number2);
                    }
                }
            };
                break;
            case "+": {
                if(number1 != "" && number2 != "" && !isEqualPressed) {
                    number1 = operate(operator, number1, number2);
                    updateScreen(number1);
                    number2 = "";
                    operator = "+";
                } else {
                    operator = "+";
                    number2 = "";
                    isEqualPressed = false;
                }
            }
                break;
            case "-": {
                if(number1 != "" && number2 != "" && !isEqualPressed) {
                    number1 = operate(operator, number1, number2);
                    updateScreen(number1);
                    number2 = "";
                    operator = "-";
                } else {
                    operator = "-";
                    number2 = "";
                    isEqualPressed = false;
                }
            }
                break;
            case "x": {
                if(number1 != "" && number2 != "" && !isEqualPressed) {
                    number1 = operate(operator, number1, number2);
                    updateScreen(number1);
                    number2 = "";
                    operator = "*";
                } else {
                    operator = "*";
                    number2 = "";
                    isEqualPressed = false;
                }
            }
                break;
            case "\u00F7": {
                if(number1 != "" && number2 != "" && !isEqualPressed) {
                    number1 = operate(operator, number1, number2);
                    updateScreen(number1);
                    number2 = "";
                    operator = "/";
                } else {
                    operator = "/";
                    number2 = "";
                    isEqualPressed = false;
                }
            }
                break;
            case "=": {
                if(number1 != "" && number2 != "") {
                    if(operator == "/" && number2 == "0") {
                        updateScreen("ERROR");
                        clear();
                        
                    } else {
                        number1 = operate(operator, number1, number2);
                        updateScreen(number1);
                        isEqualPressed = true;
                    } 
                }
            }
                break;
            case "c": {
                clear();
                updateScreen(0);
            }
                break;
            default: break;
        }
}


let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", updateButton);
