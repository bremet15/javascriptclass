let currentResult = 0;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, beforeCalc, calcNumber) {
  const calcDescription = `${beforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);

}

function writeToLog(operation, beforeCalc, calcNumber, currentResult) {
  const logEntry = {
    operation: operation,
    initial: beforeCalc,
    number: calcNumber,
    result: currentResult
  }

  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries[logEntries.length - 1]);
}

function calculate(calculateType) {
  const enteredNumber = getUserNumberInput();
  const startResult = currentResult;
  let mathOperator;

  if( calculateType !== 'ADD' &&
  calculateType !== 'SUBTRACT' &&
  calculateType !== 'MULTIPLY' &&
  calculateType !== 'DIVIDE'
  ){
    return;
  }


  if (calculateType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculateType ==='SUBTRACT'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  }else if (calculateType ==='MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  }else   {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput('-', startResult, enteredNumber);
  writeToLog(calculateType, startResult, enteredNumber, currentResult);
}

function add() {
  calculate('ADD');

}

function subtract() {
  calculate('SUBTRACT');
}

function multiply() {
  calculate('MULTIPLY');
}

function divide() {
  calculate('DIVISION');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
