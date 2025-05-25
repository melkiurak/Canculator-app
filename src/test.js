const numberButtons =  document.querySelectorAll('.buttons__numbers');
const operatorsButtons = document.querySelectorAll('.buttons__operators');
const output = document.querySelector('.display__output');

let expression  = '';
let operators = ['+', '-', '*', '/', '%']
const handleNumbers = (e) => {
    expression += e.target.textContent;
    output.textContent = expression;
};
const handleOperators = (e) => {
    let last = expression[expression.length - 1];
    if(operators.includes(last)){
        expression = expression.slice(0, -1) + e.target.textContent
    } else if (expression !== '') {
        expression += e.target.textContent
    }
    output.textContent = expression
}

numberButtons.forEach(button => {
    button.addEventListener("click", handleNumbers);
});
operatorsButtons.forEach(button => {
    button.addEventListener("click", handleOperators);
});