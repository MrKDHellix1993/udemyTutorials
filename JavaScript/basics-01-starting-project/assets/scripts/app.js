const initialVal = 0;
let currentResult = initialVal;
let calculationDesc;
let mathOperator;
let logEntries = [];

outputResult(currentResult, '');

function getUserEnteredNumber(){
  return parseInt(userInput.value);
}

function calculateResult(calculateType){
    debugger;
    const defaultValue = currentResult;
    const userEnteredValue = getUserEnteredNumber();
    if(calculateType === 'ADD'){
        currentResult = defaultValue + userEnteredValue;
        mathOperator = '+';
    }else if(calculateType === 'SUBTRACT'){
        currentResult = defaultValue - userEnteredValue;
        mathOperator = '-';
    }else if(calculateType === 'MULTIPLY'){
        currentResult = defaultValue * userEnteredValue;
        mathOperator = '*';
    }else if(calculateType === 'DIVIDE'){
        currentResult = defaultValue / userEnteredValue;
        mathOperator = '/';
    }else{
        console.log('Invation Operation');
    }
    printNLogCalcExpression(mathOperator,defaultValue,userEnteredValue);

}

function add(){
    calculateResult('ADD');
}
function subtract(){
    calculateResult('SUBTRACT');  
}
function multiply(){
    calculateResult('MULTIPLY');  
}
function divide(){
    calculateResult('DIVIDE');  
}

/* Helper Function */
function printNLogCalcExpression(operator , value1, value2){
    let logObj = {
        operation : operator,
        operandX : value1,
        operandY : value2,
        result : currentResult,
    };
    logEntries.push(logObj);
    console.log(logEntries);
    calculationDesc = `${value1} ${operator} ${value2}`;
    outputResult(currentResult, calculationDesc);
}

addBtn.addEventListener('click' , add);
subtractBtn.addEventListener('click' , subtract);
multiplyBtn.addEventListener('click' , multiply);
divideBtn.addEventListener('click' , divide);



