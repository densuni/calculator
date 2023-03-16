const btn = document.querySelectorAll("button");
const digitBtn = document.querySelectorAll('[data-digit]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');
const percentBtn = document.querySelector('[data-percent]');
const decimalBtn = document.querySelector('[data-decimal]');
const allClearBtn = document.querySelector('[data-all-clear]');
const display = document.querySelector("#display");
let operatorChoice;
let currentValue;
let initialValue;
let lastBtnPressed = false;

decimalBtn.addEventListener("click", checkDecimal);
percentBtn.addEventListener("click", getPercentage);
allClearBtn.addEventListener("click", allClear);

digitBtn.forEach(digit => {
  digit.addEventListener("click", e => {
    if (display.innerText == "0" || initialValue == display.innerText || currentValue == display.innerText) {
        display.innerText = digit.innerText;
    } else { 
      display.innerText += digit.innerText;
    }
    lastBtnPressed = false;
  });
});

operatorBtn.forEach(operator => {
  operator.addEventListener("click", e => {
    if (lastBtnPressed == true) {
      return display.innerText;
    } else if (initialValue != null) { 
      currentValue = display.innerText;
      display.innerText = operate(operatorChoice, initialValue, currentValue);
      initialValue = display.innerText; 
      currentValue == null;
    } else {
      initialValue = display.innerText;
    }
    operatorChoice = operator.dataset.operator;
    checkLastBtnPressed(e);
  });
});

equalsBtn.addEventListener("click", e => {
  if (initialValue == null) {
    return display.innerText;
  } else {
    currentValue = display.innerText;
    display.innerText = operate(operatorChoice, initialValue, currentValue);
    currentValue = display.innerText;
    initialValue = null;
  }
});

function allClear() {
  initialValue = null;
  currentValue = null;
  operatorChoice = null;
  display.innerText = "0";
}

function checkLastBtnPressed(e) {
  if (e.target.classList.contains("operator")) {
    lastBtnPressed = true;
 } else {
    lastBtnPressed = false;
  }
}

function checkDecimal () {
  if (display.innerText.includes(".") == true) {
    return display.innerText;
  } else {
    display.innerText += ".";
  }
}

function getPercentage() {
  if (initialValue == null) {
    display.innerText = display.innerText * 0.01;
  } else {
    let percentage = (display.innerText / 100) * initialValue;
    display.innerText = percentage;
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a , b) {
  a = Number(a);
  b = Number (b);
  switch (operator) {
    case "add":
      return add(a, b);
    case "substract":
      return substract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      if (currentValue == "0") {
        return ("ERROR");
      } else {
      return divide(a, b);
      }
  }
}