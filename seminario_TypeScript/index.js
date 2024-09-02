var _a, _b, _c;
import { sum, minus, mult, div } from './math.js';
const formElements = {
    n1: document.querySelector("#n1"),
    n2: document.querySelector("#n2"),
    operator: document.querySelector("#operator"),
    output: document.querySelector("output")
};
const initCalc = function () {
    const n1 = parseFloat(formElements.n1.value);
    const n2 = parseFloat(formElements.n2.value);
    const operator = formElements.operator.value;
    switch (operator) {
        case '+':
            if (formElements.output) {
                formElements.output.textContent = (sum(n1, n2).toString());
            }
            break;
        case '-':
            if (formElements.output) {
                formElements.output.textContent = (minus(n1, n2).toString());
            }
            break;
        case '*':
            if (formElements.output) {
                formElements.output.textContent = (mult(n1, n2).toString());
            }
            break;
        case '/':
            if (formElements.output) {
                formElements.output.textContent = (div(n1, n2).toString());
            }
    }
};
(_a = formElements.n1) === null || _a === void 0 ? void 0 : _a.addEventListener("input", initCalc);
(_b = formElements.n2) === null || _b === void 0 ? void 0 : _b.addEventListener("input", initCalc);
(_c = formElements.operator) === null || _c === void 0 ? void 0 : _c.addEventListener("change", initCalc);
