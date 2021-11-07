let display = document.getElementById('display');
display.textContent = "0";
let datas = document.getElementsByClassName('box');

function isOperator(val) {
    return val == '+' || val == '-' || val == '*' || val == '/';
  }
 
let operator = null;
let operand1 = null;
let operand2 = null;
for (let data of datas) {
    data.addEventListener('click',function(e) {
    let val = data.getAttribute('data-value');
        let text = display.innerText.trim();
        if (isOperator(val)) {
            operator = val;
            operand1 = parseFloat(text);
             display.textContent = "";
        }
        else if (val == '='){
            operand2 = parseFloat(text);
            let result = eval(operand1 + '' + operator + '' + operand2);
            display.textContent = result;
            operand1 = result;
            operand2 = null;
            operator = null;
            
        }
        else {
            display.textContent += val;
        }
    })

}