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

let screen = document.querySelector("#screen-text");

function operate(chosenOperator, chosenNumber1, chosenNumber2) {
    switch(chosenOperator) {
        case "+": return add(chosenNumber1, chosenNumber2);
        case "-": return substract(chosenNumber1, chosenNumber2);
        case "*": return multiply(chosenNumber1, chosenNumber2);
        case "/": return divid(chosenNumber1, chosenNumber2);
    }
}

function updateNumber(e) {
    let numb = e.target.textContent
        switch(numb) {
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
                if(operator == null) {
                    number1 = number1 + numb;
                } else {
                    number2 = number2 + numb;
                }
                screen.textContent = (operator == null)? number1 : number2;
            };
                break;
            default: break;
        }
}


let buttons = document.querySelector(".numbers");
buttons.addEventListener("click", updateNumber);
