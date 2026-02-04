// Add function
function add(number1, number2) {
    return number1 + number2
}
//Substract function
function substract(number1, number2) {
    return number1 - number2
}
//Multiply function
function multiply(number1, number2) {
    return number1 * number2
}
//Divid function
function divid(number1, number2) {
    return number1 / number2
}

let firstNumber = 0;
let secondNumber = 0;
let operator = null;

function operate(num1, num2, oper) {
    switch(oper){
        case '+': 
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divid(num1, num2);
        default: 
            return "ERROR!";
    }
}
