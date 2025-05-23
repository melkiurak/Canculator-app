let numbers = document.querySelectorAll('.buttons__numbers');
let operators = document.querySelectorAll('.buttons__operators');
const output = document.querySelector('.display__output') 
const handelGetNumbers = (e) => {
    if (e.target.textContent === '.' && output.textContent.includes('.')) return;
    output.textContent = (output.textContent === '0' && e.target.textContent !== '.') ? e.target.textContent : output.textContent + e.target.textContent
}
const handelGetOperators = (e) => {
    console.log('Я оператор', e.target.textContent);
}
numbers.forEach(button => {
    button.addEventListener("click", handelGetNumbers);
});
operators.forEach(button => {
    button.addEventListener("click", handelGetOperators);
});

