var operationButtons = document.getElementsByClassName('operationButtons');
//var operationButtons = document.getElementsByClassName('operations-block');

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



for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick); 
}





