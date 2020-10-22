// miscellaneous
let display = document.querySelector('.display');

// numbers
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

let numbers = [one, two, three, four, five, six, seven, eight, nine, zero];

// operators
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');

let operators = [divide, multiply, minus, plus];

operators.forEach(operator => {
    if (operator){
        operator.innerHTML = ` ${operator.innerHTML} `;
    }
});
                    
// display btns will show there text on display element
const displayBtns = [...operators, ...numbers];
displayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        display.innerHTML = `${display.innerHTML}${btn.innerHTML}`;
    });
});

// special btns
const equal = document.querySelector('.equal');
const percent = document.querySelector('.percent');
const allClear = document.querySelector('.allClear');
const backButton = document.querySelector('.backButton');
const decimal = document.querySelector('.decimal');

equal.addEventListener("click", () => {
    try {
        display.innerHTML = eval(display.innerHTML);
    }
    catch{
        display.innerHTML = "Error";
    }
});

percent.addEventListener("click", () => {
    display.innerHTML = (eval(display.innerHTML) / 100).toString();
});

allClear.addEventListener("click", () => {
    display.innerHTML = null;
});

backButton.addEventListener("click" , ()=>{
    try{
    const string = display.innerHTML.toString();
    display.innerHTML = new Number(string.slice(0,string.length - 1)).toString();
    }
    catch{
        display.innerHTML = 'Error';
    }
});

decimal.addEventListener("click" , ()=>{
    display.innerHTML = new String(display.innerHTML) + new String(decimal.innerHTML);
});
