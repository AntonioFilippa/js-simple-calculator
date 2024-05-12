//VARIABILI GLOBALI 
let firstOperand = ''; // First operand
let secondOperand = 0; // Second operand (initialized to 0 by default)
let operator = null; // Selected operator

// FUNZIONE PER APPENDERE NUMERO
function appendNumber(number) {
  let currentResult = document.getElementById('result').textContent || '0';

  if (currentResult === '' || currentResult.startsWith('0')) {
    document.getElementById('result').textContent += number;
  } else {
    document.getElementById('result').textContent = number;
  }
}

// FUNZIONE PER SELEZIONARE OPERATORE
function setOperator(op) {
  let currentResult = document.getElementById('result').textContent;

  if (currentResult === '') {
    return;
  }

  previousResult = currentResult;
  document.getElementById('result').textContent = '';
  currentOperator = op;
}

// FUNZIONE PER CICLO CALCOLATRICE
function calculateResult() {
  let currentResult = document.getElementById('result').textContent;

  if (currentResult === '') {
    return;
  }

  switch (currentOperator) {
    case '+':
      result = parseFloat(previousResult) + parseFloat(currentResult);
      break;
    case '-':
      result = parseFloat(previousResult) - parseFloat(currentResult);
      break;
    case '*':
      result = parseFloat(previousResult) * parseFloat(currentResult);
      break;
    case '/':
      result = parseFloat(previousResult) / parseFloat(currentResult);
      break;
  }

  document.getElementById('result').textContent = result;
  previousResult = null;
  currentOperator = null;
}

// FUNZIONE PER PULIRE DISPLAY
function clearAll() {
  firstOperand = '';
  secondOperand = 0;
  document.getElementById('result').textContent = '';
}
