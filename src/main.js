const allCalculatorButtons = document.querySelectorAll('.buttons__numbers, .buttons__operators, .buttons__special');
const output = document.querySelector('.display__output') 

let firstNumber = '';
let secondNumber = '';    
let operators = ['+', '-', '*', '/', '%']
const handleTest = (e) => {
    const value = e.target.textContent;
    if(value === '.' && output.textContent.includes('.')) return;
    if(!isNaN(value) || value === '.' && output.textContent.includes('')){
        firstNumber += value
        output.textContent = firstNumber
        console.log(output.textContent)
    }else if(operators.includes(value)) {
        if(firstNumber === '') return
        secondNumber = firstNumber
        operators = value
        firstNumber = ''
    }
}
allCalculatorButtons.forEach(button => {
    button.addEventListener("click", handleTest);
});
