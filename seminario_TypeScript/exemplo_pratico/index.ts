import { sum, minus, mult, div } from './math';

const formElements = {
    display: document.querySelector("#display") as HTMLInputElement,
    buttons: document.querySelectorAll(".btn"),
    calculateButton: document.querySelector("#calculate") as HTMLButtonElement,
    clearButton: document.querySelector("#clear") as HTMLButtonElement,
    result: document.querySelector("#result") as HTMLOutputElement
};

let currentInput: string = "";
let previousInput: string = "";
let operator: string = "";

formElements.buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const button = event.target as HTMLButtonElement;
        const value = button.getAttribute("data-num") || button.getAttribute("data-op");

        if (value) {
            if (["+", "-", "*", "/"].includes(value)) {
                if (operator) {
                    initCalc();
                }
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            } else {
                currentInput += value;
            }
            formElements.display.value = currentInput || "0";
        }
    });
});
const initCalc = function() {
    const n1 = parseFloat(previousInput);
    const n2 = parseFloat(currentInput);

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

    if (formElements.result) {
        formElements.result.textContent = result.toString();
    }
};
formElements.clearButton.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    formElements.display.value = "0";
    formElements.result.textContent = "0";
});
formElements.calculateButton.addEventListener("click", () => {
    if (operator) {
        initCalc();
        currentInput = "";
        operator = "";
        previousInput = "";
    }
});
