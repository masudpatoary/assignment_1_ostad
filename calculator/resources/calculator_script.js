const calcFirstInput = document.getElementById("calc_input_first");
const calcSndInput = document.getElementById("calc_input_second");
const calcOpn = document.getElementById("calc_operation");
const calcBtn = document.getElementById("calc_btn");
const calcResultEl = document.getElementById("calc_result");

let calcResult;

function nagativeValueValidation(inputValue) {
    if(inputValue.value<0 || !inputValue.value){     
        alert(`Please enter valid numbers only`);
        inputValue.value = '';
    } else{
        inputValue.value = inputValue.value
    }
}
calcFirstInput.addEventListener('keyup', ()=>{
    nagativeValueValidation(calcFirstInput)
})
calcSndInput.addEventListener('keyup', ()=>{
    nagativeValueValidation(calcSndInput)
})
function result() {
    const calcFirstNum = parseFloat(calcFirstInput.value)
    const calcSndtNum = parseFloat(calcSndInput.value)
    const calcOpnType = calcOpn.value
    if (calcOpnType == "+") {
        calcResult = calcFirstNum + calcSndtNum;
        showResult(calcResult)
    }
    else if (calcOpnType == "-") {
        calcResult = calcFirstNum - calcSndtNum;
        showResult(calcResult)
    }
    else if (calcOpnType == "*") {
        calcResult = calcFirstNum * calcSndtNum;
        showResult(calcResult)
    }
    else if (calcOpnType == "/") {
        calcResult = calcFirstNum / calcSndtNum;
        showResult(calcResult)
    }   
    else{
        console.log(calcResult)
    }
}



function showResult(CalcValue) {
    if (CalcValue<0 || CalcValue === NaN || !CalcValue || CalcValue == Infinity) {
        calcResultEl.innerHTML = `<div class="p-2 text-center border rounded border-2 text-danger border-danger">invalid input!</div>`
    }
    else {
        calcResultEl.innerHTML = `<div class="p-2 border rounded border-2 text-success border-success"><h3>Calculated Result</h3> <p>Result is valid!</p> <p>${CalcValue}</p></div>`
    }
}

