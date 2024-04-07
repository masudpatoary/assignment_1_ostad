const calcFirstInput = document.getElementById("calc_input_first");
const calcSndInput = document.getElementById("calc_input_second");
const calcOpn = document.getElementById("calc_operation");
const calcBtn = document.getElementById("calc_btn");
const calcResultEl = document.getElementById("calc_result");

let calcResult

function result() {
    const calcFirstNum = parseFloat(calcFirstInput.value)
    const calcSndtNum = parseFloat(calcSndInput.value)
    const calcOpnType = calcOpn.value
    if (calcOpnType == "+") {
        calcResult = calcFirstNum + calcSndtNum
        console.log(calcResult)
        showResult(calcResult)
    }
    else if (calcOpnType == "-") {
        calcResult = calcFirstNum - calcSndtNum
        console.log(calcResult)
        showResult(calcResult)
    }
    else if (calcOpnType == "*") {
        calcResult = calcFirstNum * calcSndtNum
        console.log(calcResult)
        showResult(calcResult)
    }
    else if (calcOpnType == "/") {
        calcResult = calcFirstNum / calcSndtNum
        console.log(calcResult)
        showResult(calcResult)
    }    

}

function showResult(CalcValue) {
    if (CalcValue == NaN || CalcValue == Infinity) {
        calcResultEl.innerHTML = `<div class="p-2 text-center border rounded border-2 text-danger border-danger">invalid input!</div>`
    }
    else {
        calcResultEl.innerHTML = `<div class="p-2 border rounded border-2 text-success border-success"> <p>Result is valid!</p> <p>${CalcValue}</p></div>`
    }
}

