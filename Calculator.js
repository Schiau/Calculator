const add = (a,b)=> a+b
const sbb = (a,b)=> a-b
const mull = (a,b)=> a*b
const div = (a,b)=> a/b
let number1 = 0
let number2 = 0
let op = null

function operate(number1, number2, op)
{
    switch (op) {
        case '+':
            return add(number1, number2)
        case '-':
            return sbb(number1, number2)
        case '*':
            return mull(number1, number2)
        case '/':
            return div(number1, number2)
    }
}