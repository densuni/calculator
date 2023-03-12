function add() {
  return num1 + num2;
}

function substract() {
  return num1 - num2;
}

function multiply() {
  return num1 * num2;
}

function divide() {
  return num1 / num2;
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
let num1;
let num2;
let operatorChoice;
let result;

digitBtn.forEach(digit => {
  digit.addEventListener("click", e => {
    if (num1 == display.innerText || result == display.innerText)  {
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
    num1 = parseFloat(display.innerText);
    operatorChoice = operator.dataset.operator;
    decimalBtn.disabled = false;
  });
});

actionBtn.forEach(action => {
  action.addEventListener("click", e => {
    if (action.dataset.action == "equals") {
      num2 = parseFloat(display.innerText);
      result = operate();
      display.innerText = result;
      decimalBtn.disabled = false;
    }
  });
});