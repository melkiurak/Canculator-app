const numberButtons =  document.querySelectorAll('.buttons__numbers');
const operatorsButtons = document.querySelectorAll('.buttons__operators');
const specialButtons = document.querySelectorAll('.buttons__special');
const resultButtons = document.querySelectorAll('.buttons__result');
const output = document.querySelector('.display__output');
const containerStyle = document.querySelector('.container');
const ligth = document.querySelectorAll('.theme__light');
const dark = document.querySelectorAll('.theme__dark');

let expression  = '0';
output.textContent = expression;
let operators = ['+', '-', 'x', '÷', '%']

const handleNumbers = (e) => {
    const newNum = e.target.textContent
    const parts = expression.split(/[+\-*/%]/);
    let currentNumber = parts[parts.length - 1];
    if(currentNumber === '0' && newNum === '0') return;
    
    if(currentNumber === '0' && newNum >= '1' && newNum <= '9') {
        expression = expression.slice(0, -1) + newNum
    } else if(newNum === '.' && currentNumber.includes('.')){
        return
    }  else {
        expression += newNum
    }
    output.textContent = expression;
    console.log(expression)
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
        expression = output.textContent = '0'
        output.textContent = expression === '' ? '0' : expression;
        console.log('AC')
    }
}
const handleResult = () => {
    if(expression === '') return;
    let safeExpression = expression.replace(/x/g, '*').replace(/÷/g, '/');
    safeExpression = safeExpression.replace(/(\d+(\.\d+)?)%/g, (_, num) => `${num}*0.01`);
    const result = eval(safeExpression);
    output.textContent = result.toString();
    expression = result.toString();
    console.log('я равно', result);
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
resultButtons.forEach(button => {
    button.addEventListener("click", handleResult);
});
ligth.forEach(button => {
    button.addEventListener("click", () => {
        containerStyle.style.backgroundColor = '#F7F8FB';
        output.style.color = '#424242'
        specialButtons.forEach(specialBtn =>  {
            specialBtn.style.backgroundColor = '#FFFFFF';
            specialBtn.style.color = '#858585';
        });
        numberButtons.forEach(numberBtn =>  {
            numberBtn.style.backgroundColor = '#FFFFFF';
            numberBtn.style.color = '#38B9FF';
        });
        operatorsButtons.forEach(operatorsBtn =>  {
            operatorsBtn.style.backgroundColor = '#ADE2FF';
            operatorsBtn.style.color = '#109DFF';
        });
        resultButtons.forEach(resultBtn =>  {
            resultBtn.style.backgroundColor = '#19ACFF';
            resultBtn.style.color = '#B2DAFF';
        });
        localStorage.setItem('theme', 'light');
    })
});
dark.forEach(button => {
    button.addEventListener("click", () => {
        containerStyle.style.backgroundColor = '#17181a';
        output.style.color = '#FFFFFF'
        specialButtons.forEach(specialBtn =>  {
            specialBtn.style.backgroundColor = '#616161';
            specialBtn.style.color = '#a5a5a5';
        });
        numberButtons.forEach(numberBtn =>  {
            numberBtn.style.backgroundColor = '#303136';
            numberBtn.style.color = '#29a8ff';
        });
        operatorsButtons.forEach(operatorsBtn =>  {
            operatorsBtn.style.backgroundColor = '#005db2';
            operatorsBtn.style.color = '#339dff';
        });
        resultButtons.forEach(resultBtn =>  {
            resultBtn.style.backgroundColor = '#1991ff';
            resultBtn.style.color = '#b2daff';
        });
        localStorage.setItem('theme', 'dark');

    })
})
function applyTheme(theme) {
    if(theme === 'light') {
        containerStyle.style.backgroundColor = '#F7F8FB';
        output.style.color = '#424242';
        specialButtons.forEach(specialBtn =>  {
            specialBtn.style.backgroundColor = '#FFFFFF';
            specialBtn.style.color = '#858585';
        });
        numberButtons.forEach(numberBtn =>  {
            numberBtn.style.backgroundColor = '#FFFFFF';
            numberBtn.style.color = '#38B9FF';
        });
        operatorsButtons.forEach(operatorsBtn =>  {
            operatorsBtn.style.backgroundColor = '#ADE2FF';
            operatorsBtn.style.color = '#109DFF';
        });
        resultButtons.forEach(resultBtn =>  {
            resultBtn.style.backgroundColor = '#19ACFF';
            resultBtn.style.color = '#B2DAFF';
        });
    } else if (theme === 'dark') {
        containerStyle.style.backgroundColor = '#17181a';
        output.style.color = '#FFFFFF';
        specialButtons.forEach(specialBtn =>  {
            specialBtn.style.backgroundColor = '#616161';
            specialBtn.style.color = '#a5a5a5';
        });
        numberButtons.forEach(numberBtn =>  {
            numberBtn.style.backgroundColor = '#303136';
            numberBtn.style.color = '#29a8ff';
        });
        operatorsButtons.forEach(operatorsBtn =>  {
            operatorsBtn.style.backgroundColor = '#005db2';
            operatorsBtn.style.color = '#339dff';
        });
        resultButtons.forEach(resultBtn =>  {
            resultBtn.style.backgroundColor = '#1991ff';
            resultBtn.style.color = '#b2daff';
        });
    }
}
const savedTheme = localStorage.getItem('theme');
if(savedTheme) {
    applyTheme(savedTheme);
}