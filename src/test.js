const numberButtons =  document.querySelectorAll('.buttons__numbers');
const operatorsButtons = document.querySelectorAll('.buttons__operators');
const specialButtons = document.querySelectorAll('.buttons__special');
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
const handleSpecial = (e) => {
    if(e.target.textContent === 'd'){
        if(output.textContent === '0') return;
        expression = output.textContent.slice(0, -1)
        output.textContent = expression === '' ?  '0' : expression;
    } else if (e.target.textContent === 'Ac') {
        if(output.textContent === '0') return;
        expression = output.textContent = ''
        output.textContent = expression === '' ? '0' : expression;
        console.log('AC')
    }
}
numberButtons.forEach(button => {
    button.addEventListener("click", handleNumbers);
});
operatorsButtons.forEach(button => {
    button.addEventListener("click", handleOperators);
});
specialButtons.forEach(button => {
    button.addEventListener("click", handleSpecial);
});
