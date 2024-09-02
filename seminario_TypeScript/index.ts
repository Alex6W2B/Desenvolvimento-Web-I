import {sum, minus, mult, div} from './math.js'

const formElements = {
    n1: document.querySelector("#n1"),
    n2: document.querySelector("#n2"),
    operator: document.querySelector("#operator"),
    output: document.querySelector("output")
}

const initCalc = function(){

}

formElements.n1?.addEventListener("input", initCalc)
formElements.n2?.addEventListener("input", initCalc)
formElements.operator?.addEventListener("change", initCalc)