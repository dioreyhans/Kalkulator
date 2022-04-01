
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number)=>{
    calculatorScreen.value = number
}

const numbers= document.querySelectorAll(".number")
const operators= document.querySelectorAll(".operator")
const equalSign= document.querySelector(".equal-sign")
const clearBtn= document.querySelector(".all-clear")
const decimal= document.querySelector(".decimal")
const percentage= document.querySelector(".percentage")

let prevNumber ="";
let calculationOperator="";
let currentNumber="0";

const inputNumber= (number)=>{
    if (currentNumber==="0") {
        currentNumber =number
    } else {
        currentNumber +=number
    }   
}
const inputOperator= (operator)=>{
    if(calculationOperator===""){
        prevNumber=currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})

equalSign.addEventListener("click",()=>{
    calculate()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return
    }
    currentNumber+=dot
}
percentage.addEventListener("click", (event)=>{
    currentNumber = parseFloat(currentNumber) / 100
    updateScreen(currentNumber)
})
decimal.addEventListener("click", (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const calculate=()=>{
    let result=""
    switch (calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
        break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
        break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
        break
        default:
        break
    }
    currentNumber = result
    calculationOperator = ""
}
const clearAll = ()=>{
    prevNumber = ''
    currentNumber = '0'
    calculationOperator = ''

}
clearBtn.addEventListener("click",()=>{
    clearAll()
    updateScreen(currentNumber)
})