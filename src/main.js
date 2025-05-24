const allCalculatorButtons = document.querySelectorAll('.buttons__numbers, .buttons__operators, .buttons__special');
const output = document.querySelector('.display__output') 

let firstOperator = null;
let operator = ['+', '-', '*', '/', '%'];

const handleTest = (e) => {
    const numberValue = firstOperator(e.target.textContent);
    if(numberValue === '.' && output.textContent.includes('.')) return;

    console.log(numberValue + numberValue, output.textContent)
    output.textContent = (output.textContent === '0' && numberValue !== '.') ? numberValue : output.textContent + numberValue
}
allCalculatorButtons.forEach(button => {
    button.addEventListener("click", handleTest);
});
