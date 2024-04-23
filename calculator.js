let firstNumber = 0;
let secondNumber = 0;
let operatorValue;
let result;

const keypad = document.querySelector("#keypad")
const displayBox = document.querySelector("#mainDisplay")
const historicDisplay = document.querySelector("#historicValues")
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(firstNumber, operator, secondNumber) {
  switch(operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      return result;
    case "-":
      result = subtract(firstNumber, secondNumber);
      return result;
    case "X":
      result = multiply(firstNumber, secondNumber);
      return result;
    case "/":
      result = divide(firstNumber, secondNumber);
      return result;
  }
}
}