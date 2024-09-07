let currentInput = '';
let operation = '';
let firstNumber = '';
let fullExpression = '';

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', handleKeyboardInput);
});

function handleKeyboardInput(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        setOperation(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return; // No permitir múltiples puntos
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '' && firstNumber === '') return;
    if (firstNumber !== '') {
        calculate();
    }
    operation = op;
    firstNumber = currentInput;
    fullExpression = `${firstNumber} ${operation}`;
    currentInput = '';
    updateDisplay();
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
    fullExpression = '';
    operation = '';
    firstNumber = '';
    updateDisplay();
    document.getElementById('result').textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    firstNumber = '';
    fullExpression = '';
    updateDisplay();
    document.getElementById('result').textContent = '0';
}

function updateDisplay() {
    if (fullExpression) {
        document.getElementById('display').value = fullExpression + (currentInput || '');
    } else {
        document.getElementById('display').value = currentInput;
    }
}
