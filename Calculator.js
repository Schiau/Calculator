const add = (a,b)=> a+b
const sbb = (a,b)=> a-b
const mull = (a,b)=> a*b
const div = (a,b)=> a/b
let firstDigitMultyplayer = 1
let secoundDigitMultyplayer = 1
let number1 = 0
let number2 = 0
let op = ""
let isDecimal = false
let firstNumberComplet = false
let opSelected = false
let secoundNumberComplet = false
const keyPadd = document.getElementsByClassName("button")
const opBtn = document.getElementsByClassName("buttonOp")
const displayNumberUp = document.getElementsByClassName("number-up")[0]
const displayNumberDown = document.getElementsByClassName("number-down")[0] 

function operate(number1, number2, op)
{
    switch (op) {
        case '+':
            return add(number1, number2)
        case '-':
            return sbb(number1, number2)
        case 'x':
            return +Number(mull(number1,number2)).toFixed(3)
        case '/':
            return number2 == 0 ? 0: +Number(div(number1,number2)).toFixed(3)
    }
}

function clear()
{
    displayNumberUp.textContent = ""
    displayNumberDown.textContent = ""
    number1 = 0
    number2 = 0
    op = ""
    firstDigitMultyplayer = 1
    secoundDigitMultyplayer = 1
    firstNumberComplet = false
    opSelected = false
    secoundNumberComplet = false
    isDecimal= false
}

clear()
Array.from(keyPadd).map(key => key.addEventListener("click", () =>{
    if(opSelected)
        secoundNumberComplet = true
    firstNumberComplet = true
    displayNumberDown.textContent += key.textContent
}))
Array.from(opBtn).map(btn => btn.addEventListener("click", () =>{
    switch(btn.textContent)
    {
        case "CC":
            clear();
            break;
        case "=":
            if(firstNumberComplet && secoundNumberComplet)
            {
                number2 = +displayNumberDown.textContent
                let result = operate(+number1,+number2,op)
                clear()
                number1 = result
                firstNumberComplet = true
                displayNumberDown.textContent = result
            }
            break;
        case ".":
            if(displayNumberDown.textContent.length == 0) displayNumberDown.textContent += 0
            if((+displayNumberDown.textContent) % 1 == 0 && displayNumberDown.textContent != "0.") displayNumberDown.textContent += "."
            break;
        case "Delete":
            if(displayNumberDown.textContent.length > 0) displayNumberDown.textContent = displayNumberDown.textContent.substring(0,displayNumberDown.textContent.length - 1)
            break;
        default:
            if(firstNumberComplet)
            {
                op = btn.textContent
                if(!opSelected) number1 = +displayNumberDown.textContent 
                displayNumberUp.textContent = number1 + " " + op
                displayNumberDown.textContent = ""
                opSelected = true
            }
            break;
    }
}))