const allCalculatorButtons = document.querySelectorAll('.buttons__numbers, .buttons__operators, .buttons__special');
const output = document.querySelector('.display__output') 

let firstNumber = '';
let secondNumber = '';    
let currentOperator = '';
let isSecond = false;
let operators = ['+', '-', 'x', '÷', '%']

const handleTest = (e) => {
    const value = e.target.textContent;
    
    if(value === '.' && output.textContent.includes('.')) return;
    if(!isNaN(value) || value === '.' && output.textContent.includes('')){
        if(!isSecond){
            firstNumber += value
            output.textContent = firstNumber
        } else{
            secondNumber += value
            output.textContent = firstNumber + currentOperator + secondNumber 
            console.log(output.textContent)
        }
    }  else if(operators.includes(value)) {
        if(firstNumber === '') return;
        currentOperator = value;
        isSecond = true;
        output.textContent = firstNumber + value 
        console.log(output.textContent)
    } else if (value === 'd') {
        if(output.textContent === '0') return;
        firstNumber = output.textContent.slice(0, -1)
        output.textContent = firstNumber === '' ? '0' : firstNumber;
    } else if (value === 'Ac') {
        if(output.textContent === '0') return;
        firstNumber = output.textContent = ''
        output.textContent = firstNumber === '' ? '0' : firstNumber;
        console.log('AC')
    }
}
allCalculatorButtons.forEach(button => {
    button.addEventListener("click", handleTest);
});
