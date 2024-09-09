import { sum, minus, mult, div } from './math.js';

const formElements = {
    display: document.querySelector("#display"),
    buttons: document.querySelectorAll(".btn"),
    calculateButton: document.querySelector("#calculate"),
    clearButton: document.querySelector("#clear"),
    result: document.querySelector("#result")
};

let currentInput = "";
let expression = "";
let operator = "";
let lastResult = null;

const updateDisplay = (value) => {
    formElements.display.value = value || "0";
};

formElements.buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const button = event.target;
        const value = button.getAttribute("data-num") || button.getAttribute("data-op");

        if (value) {
            if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "" || lastResult !== null) {
                    if (lastResult !== null && currentInput === "") {
                        currentInput = lastResult.toString();
                    }
                    expression += value;
                    operator = value;
                    currentInput = "";
                }
            } else {
                currentInput += value;
                expression += value; 
            }
            updateDisplay(expression);
        }
    });
});

const initCalc = function() {
    let n1, n2;
    
    if (lastResult !== null && operator && currentInput === "") {
        n1 = lastResult;
        n2 = parseFloat(lastResult);
    } else {
        n1 = lastResult !== null ? lastResult : parseFloat(expression.split(operator)[0]);
        n2 = parseFloat(currentInput || expression.split(operator)[1]);
    }

    let result = 0;
    switch (operator) {
        case '+':
            result = sum(n1, n2);
            break;
        case '-':
            result = minus(n1, n2);
            break;
        case '*':
            result = mult(n1, n2);
            break;
        case '/':
            result = div(n1, n2);
            break;
        default:
            result = n2;
            break;
    }

    formElements.result.textContent = result.toString();
    updateDisplay(result.toString());
    lastResult = result;
    currentInput = "";
    expression = "";
};

formElements.clearButton.addEventListener("click", () => {
    currentInput = "";
    expression = "";
    operator = "";
    lastResult = null; 
    updateDisplay("0");
    formElements.result.textContent = "0";
});

formElements.calculateButton.addEventListener("click", () => {
    if (operator && (currentInput !== "" || lastResult !== null)) {
        initCalc();
    }
});
