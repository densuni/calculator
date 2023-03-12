function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator) {
  if(operator == "add") {
    add();
  } else if(operator == "substract") {
    substract();
  } else if(operator == "multiply") {
    multiply();
  } else if(operator == "divide") {
    divide();
  }
}

const digitBtn = document.querySelectorAll(".digit");
const display = document.querySelector("#display");

digitBtn.forEach(digit => {
  digit.addEventListener("click", e => {
    if (display.innerText == "0") {
      if (digit.dataset.action == "decimal") {
        display.innerText += digit.innerText;
      } else {
        display.innerText = digit.innerText;
      }
    } else {
      display.innerText += digit.innerText;
    }
  });
});


