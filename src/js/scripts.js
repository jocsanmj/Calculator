let currentInput = '';
let operation = '';
let firstNumber = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '' && firstNumber === '') return;
    if (firstNumber !== '') {
        calculate();
    }
    firstNumber = currentInput;
    operation = op;
    currentInput = '';
}

function calculate() {
    if (firstNumber === '' || currentInput === '') return;
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    firstNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    firstNumber = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
