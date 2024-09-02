import {sum, minus, mult, div} from './math'

const formElements = {
    n1: document.querySelector("#n1") as HTMLInputElement,
    n2: document.querySelector("#n2") as HTMLInputElement,
    operator: document.querySelector("#operator") as HTMLSelectElement,
    output: document.querySelector("output")
}

const initCalc = function(){
    const n1 = parseFloat(formElements.n1.value)
    const n2 = parseFloat(formElements.n2.value)
    const operator = formElements.operator.value

    switch(operator){
        case '+':
            if(formElements.output){
                formElements.output.textContent = (sum(n1,n2).toString())
            }
            break;
        case '-':
            if(formElements.output){
                formElements.output.textContent = (minus(n1,n2).toString())
            }
            break;
        case '*':
            if(formElements.output){
                formElements.output.textContent = (mult(n1,n2).toString())
            }
            break;
        case '/':
        if(formElements.output){
            formElements.output.textContent = (div(n1,n2).toString())
        }
    }
}

formElements.n1?.addEventListener("input", initCalc)
formElements.n2?.addEventListener("input", initCalc)
formElements.operator?.addEventListener("change", initCalc)