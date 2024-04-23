let firstNumber = 0;
let secondNumber = 0;
let operatorValue;
let result;

const keypad = document.querySelector("#keypad")
const displayBox = document.querySelector("#mainDisplay")
const historicDisplay = document.querySelector("#historicValues")

keypad.addEventListener("click", function(e) {
  if (e.target.classList.contains("number")) {
    addValue(e.target.textContent);
  } else if (e.target.classList.contains("operator")) {
    addOperator(e.target.textContent);
  } else if (e.target.classList.contains("equals")) {
    saveCurrentNumber(displayBox.textContent, false);
    displayBox.textContent = operate(firstNumber,operatorValue,secondNumber);
    historicDisplay.textContent = "";
  }
})

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  return +a / +b;
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

function addValue(a) {
  displayBox.textContent += a;
}

function addOperator(operator) {
  if (historicDisplay.textContent === "") {
    saveCurrentNumber(displayBox.textContent, true);
    operatorValue = operator;
  } else {
    saveCurrentNumber(displayBox.textContent, false);
    operatorValue = operator;
    operate(firstNumber,operatorValue,secondNumber);
    firstNumber = result;
  }
  historicDisplay.textContent = `${firstNumber} ${operator}`;
  displayBox.textContent = "";
}

function saveCurrentNumber(value, firstOrSecondSwitch) {
  if (firstOrSecondSwitch === true) {
    firstNumber = value;
  } else {
    secondNumber = value;
  }
}