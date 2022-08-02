var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDivide = document.getElementById('buttonDivide');


var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


function makeOperation(operator) {

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operator === '+') {
        var result = number1  + number2;
    } else if (operator === '-') {
        var result = number1  - number2;
    } else if (operator === '*') {
        var result = number1  * number2;
    } else if (operator === '/') {
        var result = number1 / number2;
    } else {
        window.alert('Unknown operation')
    }
    console.log(result)
}


function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}


buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDivide.addEventListener('click', onOperationButtonClick);



