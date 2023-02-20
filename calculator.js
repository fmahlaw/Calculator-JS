let memory = 0;
let display = document.getElementById("display");
let expression = "";

function clearDisplay() {
  expression = "";
  display.value = "";
}

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function calculate(operator) {
  if (expression === "") return;
  if (operator === "=") {
    display.value = eval(expression);
    expression = display.value;
  } else if (expression.includes("sin(")) {
    display.value = Math.sin(eval(expression.slice(4, -1))) + "";
  } else if (expression.includes("cos(")) {
    display.value = Math.cos(eval(expression.slice(4, -1))) + "";
  } else if (expression.includes("log(")) {
    display.value = Math.log10(eval(expression.slice(4, -1))) + "";
  } else {
    expression += operator;
    display.value = expression;
  }
}

function addToMemory() {
  const display = document.getElementById("display");
  const value = display.value;
  if (value !== "") {
    memory += parseFloat(value);
  }
}

function recallMemory() {
  document.getElementById("display").value = memory + "";
}
