let currentResult = 0;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, beforeCalc, calcNumber){
    const calcDescription = `${beforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const startResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput("+", startResult, enteredNumber);
   
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const startResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput("-", startResult, enteredNumber);
   
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const startResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput("*", startResult, enteredNumber);
   
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const startResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput("/", startResult, enteredNumber);
   
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



