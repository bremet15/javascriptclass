let currentResult = 0;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, beforeCalc, calcNumber) {
  const calcDescription = `${beforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
 
}

function writeToLog(operation, beforeCalc, calcNumber, currentResult){
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

function add() {
  const enteredNumber = getUserNumberInput();
  const startResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', startResult, enteredNumber);

  writeToLog('Add',  startResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const startResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', startResult, enteredNumber);
  writeToLog('Sub',  startResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const startResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', startResult, enteredNumber);
  writeToLog('Multiply', startResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const startResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', startResult, enteredNumber);
  writeToLog('Division', startResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
