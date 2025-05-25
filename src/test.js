const numberButtons =  document.querySelectorAll('.buttons__numbers');
const operatorsButtons = document.querySelectorAll('.buttons__operators');
const output = document.querySelector('.display__output');

let firstNumber = '';
let secondNumber = '';
let selectedOperators = '';
const handleNumbers = (e) => {
    firstNumber += Number(e.target.textContent);
    output.textContent = firstNumber
    console.log(+firstNumber)
};
const handleOperators = (e) => {
    selectedOperators = e.target.textContent;
    output.textContent = selectedOperators
}

numberButtons.forEach(button => {
    button.addEventListener("click", handleNumbers);
});
operatorsButtons.forEach(button => {
    button.addEventListener("click", handleOperators);
});