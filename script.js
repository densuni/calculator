function add() {
  return firstOperand + secondOperand;
}

function substract() {
  return firstOperand - secondOperand;
}

function multiply() {
  return firstOperand * secondOperand;
}

function divide() {
  return firstOperand / secondOperand;
}

function operate() {
  if (operatorChoice == "add") {
    return add();
  } else if (operatorChoice == "substract") {
    return substract();
  } else if (operatorChoice == "multiply") {
    return multiply();
  } else if (operatorChoice == "divide") {
    return divide();
  }
}

const digitBtn = document.querySelectorAll(".digit");
const operatorBtn = document.querySelectorAll(".operator");
const actionBtn = document.querySelectorAll(".action");
const decimalBtn = document.querySelector('[data-action="decimal"]');
const display = document.querySelector("#display");
let firstOperand;
let secondOperand;
let operatorChoice;
let result;

digitBtn.forEach(digit => {
  digit.addEventListener("click", e => {
    if (firstOperand == display.innerText || result == display.innerText)  {
      if (digit.dataset.action == "decimal") {
        display.innerText = "0" + digit.innerText;
      } else display.innerText = digit.innerText;
    } else if (display.innerText == "0") {
      if (digit.dataset.action == "decimal") {
        display.innerText += digit.innerText;
        decimalBtn.disabled = true;
      } else {
        display.innerText = digit.innerText;
      }
    } else {
      display.innerText += digit.innerText;
    }
  });
});

operatorBtn.forEach(operator => {
  operator.addEventListener("click", e => {
    if (firstOperand != null) {
      secondOperand = parseFloat(display.innerText);
      firstOperand = operate();
      display.innerText = firstOperand;
    } else {
      firstOperand = parseFloat(display.innerText);
    }
    operatorChoice = operator.dataset.operator;
    decimalBtn.disabled = false;
  });
});

actionBtn.forEach(action => {
  action.addEventListener("click", e => {
    if (action.dataset.action == "equals") {
      secondOperand = parseFloat(display.innerText);
      result = operate();
      display.innerText = result;
      decimalBtn.disabled = false;
    }
  });
});