document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    function clearDisplay() {
        display.value = '';
    }
    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }
    function appendNumber(number) {
        display.value += number;
    }
    function appendOperator(operator) {
        const lastChar = display.value.slice(-1);
        if ("+-*/".includes(lastChar)) {
            display.value = display.value.slice(0, -1) + operator;
        } else {
            display.value += operator;
        }
    }
    function appendDot() {
        const lastChar = display.value.slice(-1);
        if (!lastChar.includes('.')) {
            display.value += '.';
        }
    }
    function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    }
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.appendDot = appendDot;
    window.calculate = calculate;
});